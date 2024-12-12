"use client";

import Image from "next/image";
import Link from "next/link";
import ForgetpasswordForm from "@/components/forgetpassword/forgetpassword"
import VerifycodeForm from "@/components/verifycode/verifycode";
import MainStructure from "@/components/mainstructure/mainstructure";
import Navbar from "@/components/navbar/navbar";


export default function Verifycode() {
  return (
    <div className="login grid grid-cols-3 gap-8  space-y-10 h-screen">
      <MainStructure/>
      <div className="form col-span-2 px-10">
        <div className="links flex gap-6 justify-end">
         <Navbar/>
        </div>
 <VerifycodeForm/>
      
      </div>
    </div>
  );
}
