"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Continuewith from "@/components/continuewith/continuewith";
export default function ForgetpasswordForm() {
 
 
  const [email, setEmail] = useState("");

  const [apiErr,setApiErr] = useState('')
  const redirection = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let data = await fetch('https://exam.elevateegy.com/api/v1/auth/forgotPassword',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
      
       email:email,
       
      }),
    })
    let response = await data.json()
    console.log('response',response?.message)
    if (response?.message == 'success'){
      redirection.push("/verifycode")
    }
    else{
      setApiErr(response?.message)
    }
  };
  return (
    <div className=" flex flex-col gap-8 justify-center items-center h-full ">
      <form onSubmit={handleSubmit} className="  w-[35%] flex flex-col gap-6  ">
        <p className="font-semibold text-lg">Forget password</p>
        {apiErr&& <div className="bg-red-200 p-5">{apiErr}</div>}


        <input
          type="email"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${apiErr?'border-red-200':''}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
  
          type="submit"
          className="bg-[#4461F2] text-white font-light text-sm w-full p-3 rounded-2xl"
        >
          sign in
        </button>
      
      </form>
      <Continuewith/>
    </div>
  );
}
