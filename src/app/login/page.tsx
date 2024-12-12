"use client";
import LoginForm from "@/components/login/Login";
import MainStructure from "@/components/mainstructure/mainstructure";
import Navbar from "@/components/navbar/navbar";
import Naver from "next-auth/providers/naver";

import { signIn,useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState,FormEvent } from "react";



export default function Signin() {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [errMsg,setErrMsg]=useState("");

  // const handleSubmit = async (e: FormEvent) => {
 
   
  //    const res = await signIn('credentials',{
  //       email:userName,
  //       password:password,
  //       callbackUrl:'/',
  //       redirect:false
  //     });
  
  //     console.log(res);
  // }
  

  return (
    <div className="login grid grid-cols-3 gap-8  space-y-10 h-screen">
     <MainStructure/>
      <div className="form col-span-2 px-10">
        <div className="links flex gap-6 justify-end">
         <Navbar/>
        </div>
    <LoginForm/>
      
      </div>
    </div>
  );
}
