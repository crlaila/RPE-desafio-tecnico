import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import SignInForm from "../components/auth/SignInForm";
import SignOutButton from "../components/auth/SignOutButton";

export default function Home({ session }: { session: any }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600
     text-white justify-center items-center"
    >
      <h1 className="text-2xl font-bold pb-8">Bem vindo ao Desafio 04</h1>
      {!session ? <SignInForm /> : <SignOutButton />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
