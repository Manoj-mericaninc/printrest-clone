/** @format */

"use client";
import React, { useEffect, useState } from "react";
import app from "../firebase/firebase";
import UserInfo from "../../../components/UserInfo";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import PinList from "../../../components/pins/PinList";

const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState();
  const [listOfPins, setListOfPins] = useState([]);
  useEffect(() => {
    console.log(params.userId.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userId.replace("%40", "@"));
    }
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "firebasedb", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    if (userInfo) {
      getUserPins();
    }
  }, [userInfo]);
  const getUserPins = async () => {
    setListOfPins([]);
    const q = query(
      collection(db, "firebasedb"),
      where("email", "==", userInfo.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setListOfPins((listOfPins) => [...listOfPins, doc.data()]);
    });
  };
  return (
    <div>
      {userInfo ? (
        <div>
          <UserInfo userInfo={userInfo} />

          <PinList listOfPins={listOfPins} />
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
