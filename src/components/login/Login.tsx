"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Continuewith from "@/components/continuewith/continuewith";
export default function LoginForm() {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [apiErr,setApiErr] = useState('')
  const redirection = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
   
    let data = await fetch('https://exam.elevateegy.com/api/v1/auth/signin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
       email:email,
       password:password
      }),
    })

    let response = await data.json()
    console.log('response',response?.message)
    if (response?.message == 'success'){
      redirection.push("/")
    }
    else{
      setApiErr(response?.message)
    }
  };
  
  return (
    <div className=" flex flex-col gap-8 justify-center items-center h-full ">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="  w-[35%] flex flex-col gap-6  "
      >
        <p className="font-semibold text-lg">Sign in</p>
        {apiErr&& <div className="bg-red-200 p-5">{apiErr}</div>}
        <input
          type="email"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"email"')!==-1)?'border-red-200':''}`}
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          className={`w-full shadow-lg border-2 p-2 rounded-lg focus:outline-none ${(apiErr?.indexOf('"password"')!==-1)?'border-red-200':''}`}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
        <Link href={"./forgetpassword"}> <p className="text-xs text-[#122D9C]   text-end">Recover Password ?</p>
        </Link>
        <button
          type="submit"
          className="bg-[#4461F2] text-white font-light text-sm w-full p-3 rounded-2xl"
        >
          {" "}
          Sign in{" "}
        </button>
      </form>
     <Continuewith/>
    </div>
  );
}
