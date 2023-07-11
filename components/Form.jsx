/** @format */
"use client";
import React, { useState } from "react";
import Image from "next/image";

import UserTag from "./UserTag";
import { useSession } from "next-auth/react";
import UploadImage from "./UploadImage";

const Form = () => {
  const { data: session } = useSession;
  console.log("session", session);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [link, setLink] = useState();
  const [file, setFile] = useState();

  const onSave = () => {
    console.log("Title:", title, "Desc:", desc, "Link:", link);
    console.log("File:", file);
  };

  return (
    <div className=" bg-white p-16 rounded-2xl ">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => onSave()}
          className="bg-red-500 p-2
            text-white font-semibold px-3 
            rounded-lg">
          <Image
            src="/loading-indicator.png"
            width={30}
            height={30}
            alt="loading"
            className="animate-spin"
          />
          <span>Save</span>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <UploadImage setFile={(file) => setFile(file)} />

        <div className="col-span-2">
          <div className="w-[100%]">
            <input
              type="text"
              placeholder="Add your title"
              onChange={(e) => setTitle(e.target.value)}
              className="text-[35px] outline-none font-bold w-full
        border-b-[2px] border-gray-400 placeholder-gray-400"
            />
            <h2 className="text-[12px] mb-8 w-full  text-gray-400">
              The first 40 Charaters are what usually show up in feeds
            </h2>
            <UserTag user={session?.user} />
            <textarea
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Tell everyone what your pin is about"
              className=" outline-none  w-full mt-8 pb-4 text-[14px]
        border-b-[2px] border-gray-400 placeholder-gray-400"
            />
            <input
              type="text"
              onChange={(e) => setLink(e.target.value)}
              placeholder="Add a Destination Link"
              className=" outline-none  w-full  pb-4 mt-[90px]
        border-b-[2px] border-gray-400 placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
