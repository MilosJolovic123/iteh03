import Image from "next/image";

export default function Home() {
  return (
    <div className={"bg-blue-500 text-white font-bold text-[32px] h-[90vh]"}>
     <p className={"text-[32px]"}>GLAVNA STRANICA</p>
     <a className={"text-5xl underline hover:text-blue-950"} href="/brojac">Predji na stranicu sa brojacem</a>
    </div>
  );
}
