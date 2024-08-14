import React from "react";
import { useUsers } from "../hooks/useUsers";
import UserList from "../components/UserList";

const Home = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <p className="text-center mt-10 font-bold text-gray-500">
        Por favor aguarde...
      </p>
    );
  }

  if (error) {
    return <p className="text-center mt-10 font-bold text-red-500">{error}</p>;
  }

  return (
    <div className="flex items-center justify-center p-8 bg-slate-950">
      <div className="max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-400">
          Lista de Usuários / Exemplo
        </h1>
        <UserList users={users} />
      </div>
    </div>
  );
};

export default Home;
