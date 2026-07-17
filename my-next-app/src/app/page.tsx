import Image from "next/image";

export default function Home() {
  return (
    <div className="border-2 border-red-600 text-white p-5 flex flex-col justify-center items-center gap-6 rounded-3xl ">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl">Welcome To Contact Manager</h1>
        <p className="font-medium text-lg">Manage your contacts easily and securly</p>
      </div>
      {/* image */}
      <Image src="/next.svg" alt="home-image" className="invert" width={300} height={300} priority />

      <p className="font-light text-lg">Start managing your contacts today!</p>
    </div>
  );
}
