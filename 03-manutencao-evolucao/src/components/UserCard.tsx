import React from "react";
import { User } from "../types/user";

const UserCard: React.FC<User> = ({ name, email, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src={avatar}
        alt={name}
      />
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
