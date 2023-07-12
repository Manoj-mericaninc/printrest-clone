/** @format */

"use client";
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import app from "./firebase/firebase";
import { useEffect, useState } from "react";
import PinList from "../../components/pins/PinList";

const Home = () => {
  const db = getFirestore(app);
  const [listOfPins, setListOfPins] = useState([]);
  console.log(listOfPins);

  useEffect(() => {
    getAllPins();
  }, []);
  const getAllPins = async () => {
    setListOfPins([]);

    // const q = query(collection(db, "pinterest"));
    const querySnapshot = await getDocs(collection(db, "firebasedb"));
    querySnapshot.forEach((doc) => {
      setListOfPins((listOfPins) => [...listOfPins, doc.data()]);
    });
  };

  return (
    <>
      <div className="p-3">
        <PinList listOfPins={listOfPins} />
      </div>
    </>
  );
};
export default Home;
