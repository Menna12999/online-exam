"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
export default function Continuewith(){
    return(
        <>
        <div className=" flex gap-3 items-center">
        <div className="divider h-[1px] bg-[#E7E7E7] w-12"></div>
        <p> or Continue with</p>
        <div className="divider  h-[1px] bg-[#E7E7E7] w-12"></div>
      </div>
      <div 
     onClick={() => signIn("facebook", { callbackUrl: "/" })}
      className="social-login flex gap-4">
        <div className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="facebook" src={"/Vector.png"} />
        </div>
        <div 
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Logo Google.png"} />
        </div>
        <div 
         onClick={() => signIn("twitter", { callbackUrl: "/" })}
        className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="twitter" src={"/Logo.png"} />
        </div>
        <div
          
          className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer"
        >
          <Image width={20} height={20} alt="apple" src={"/Logo (1).png"} />
        </div>
      </div>
        </>
    )
}