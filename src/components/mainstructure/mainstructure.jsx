import Image from "next/image";

export default  function MainStructure() {
return(
    <>
     <div className="wlcome-elevate flex h-full flex-col justify-center  bg-[#F0F4FC] col-span-1 py-8 px-8 shadow-lg rounded-tr-[100px] rounded-br-[100px]">
        <h1 className="text-5xl font-semibold leading-tight">
          Welcome to{" "}
          <span className="block text-[#122D9C] leading-loose">Elevate</span>
        </h1>
        <p className="text-lg font-normal">
          Quidem autem voluptatibus qui quaerat aspernatur architecto natus
        </p>
        <Image width={308} height={308} src={"/bro.png"} alt="elevate" />
      </div>
    </>
)
}