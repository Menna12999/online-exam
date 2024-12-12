"use client";
import RegisterForm from "@/components/register/Register";
import MainStructure from "@/components/mainstructure/mainstructure";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import Link from "next/link";

export default  function Signup() {
  return (
    <div className="login grid grid-cols-3 gap-8  space-y-10 h-screen">
     <MainStructure/>
      <div className="form col-span-2 px-10">
        <div className="links flex gap-6 justify-end">
          <Navbar/>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
