import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <Link
        href={"/login"}
        className="text-[#122D9C] font-medium cursor-pointer"
      >
        Sign in
      </Link>
      <Link
        href={"/register"}
        className="border px-4  font-light text-[#122D9C] rounded-xl cursor-pointer"
      >
        Sign up
      </Link>
        </>
    )
}