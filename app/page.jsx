import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="">
        Hello there 👋 <br />
        I'm Rémi, a front-end web developer, passionate about UX, interactions and pixel perfect design.</h1>
    </>
  );
}
