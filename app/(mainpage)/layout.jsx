"use client";
import Navbar from "./component/navbar";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard({ children }) {


  let router = useRouter();
  let user =auth.currentUser;

  if (!user) {
    router.push("/login")
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

