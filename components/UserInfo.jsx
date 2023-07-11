/** @format */

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserInfo = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col items-center gap-y-2">
      <Image
        src={session.user.image}
        alt="image"
        width={80}
        height={80}
        className="rounded-full"
      />
      <h2 className="font-semibold">{session.user.name}</h2>
      <h2 className="">{session.user.email}</h2>
      <button className="bg-black hover:bg-gray-300 text-white hover:text-black font-semibold rounded-full p-2 px-4 hidden md:block drop-shadow-lg">
        Share
      </button>
    </div>
  );
};

export default UserInfo;
