"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Continuewith from "@/components/continuewith/continuewith";

export default function RegisterForm() {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");
  const [phone,setPhone]=useState('')
  const [apiErr,setApiErr] = useState('')
  const redirection = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let data = await fetch('https://exam.elevateegy.com/api/v1/auth/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
       firstName:firstName,
       lastName:lastName,
       username:userName,
       email:email,
       password:password,
       rePassword:rePassword,
       phone:phone
      }),
    })
    let response = await data.json()
    console.log(response?.message)
    if (response?.message == 'success'){
      redirection.push("/login")
    }
    else{
      setApiErr(response?.message)
    }
  };
console.log(apiErr)
  return (
    <div className=" flex flex-col gap-8 justify-center items-center h-full ">
      <form onSubmit={handleSubmit} className="  w-[35%] flex flex-col gap-6  ">
        <p className="font-semibold text-lg">Sign up</p>
        {apiErr&& <div className="bg-red-200 p-5">{apiErr}</div>}
        <input
          type="text"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"firstName"')!==-1)?'border-red-200':''}`}
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"lastName"')!==-1)?'border-red-200':''}`}
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"username"')!==-1)?'border-red-200':''}`}
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="email"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"email"')!==-1)?'border-red-200':''}`}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"password"')!==-1)?'border-red-200':''}`}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"rePassword"')!==-1)?'border-red-200':''}`}
          placeholder="confirm Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <input
          type="tel"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"phone"')!==-1)?'border-red-200':''}`}
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p className="text-sm text-center tracking-widest">
          Already have an account?{" "}
         
          <Link href={"/login"}>
          <span className="text-[#4461F2] "> Login </span></Link>
        </p>
        <button
        onClick={handleSubmit}
          type="submit"
          className="bg-[#4461F2] text-white font-light text-sm w-full p-3 rounded-2xl"
        >
          Create Account
        </button>
      
      </form>
      <Continuewith/>
    </div>
  );
}
