import React from "react";
import Image from "next/image";
import { User } from "../types/user";

const UserCard: React.FC<User> = ({ name, email, avatar }) => {
  return (
    <div className="bg-slate-400 shadow-md rounded-xl p-1 flex items-center space-x-4">
      <Image
        src="/perfil.jpg"
        alt="Perfil"
        className="rounded-xl"
        width={5000}
        height={500}
      />

      <div className="text-slate-400 px-5">
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
