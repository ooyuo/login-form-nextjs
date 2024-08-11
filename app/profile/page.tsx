import React from "react";
import Image from "next/image";

import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import db from "@/lib/db";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

async function ProfilePage() {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/");
  };

  return (
    <div className="elative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <span className="text-4xl font-bold pb-10">환영해요</span>
      <Image
        src={"/images/avatar/default-avatar.jpg"}
        alt={"avatar"}
        width={80}
        height={80}
        className="rounded-full"
      />
      <span>{user?.username}</span>
      <span>{user?.email}</span>
      <form action={logOut} className="pt-5">
        <button type="submit" className="cursor-pointer text-blue-500 ">
          Log out
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;
