/** @format */
"use client";

// import { doc, getDoc, getFirestore } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import app from "../firebase/firebase";
import UserInfo from "../../../components/UserInfo";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  console.log("session", session);

  //   const db = getFirestore(app);
  //   const [userInfo, setUserInfo] = useState();

  //   useEffect(() => {
  //     console.log(session.email);

  //     if (params) {
  //       getUserInfo(params.email);
  //     }
  //   }, [params]);

  //   const getUserInfo = async (email) => {
  //     const docRef = doc(db, "firebasedb", email);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       setUserInfo(docSnap.data());
  //     } else {
  //       // docSnap.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   };

  return <div>{session ? <UserInfo userInfo={session?.user} /> : null}</div>;
};

export default Profile;
