import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="">
        Hello there 👋 <br />
        I'm Rémi, a front-end web developer, passionate about UX, interactions and pixel perfect design.</h1>
      <Footer />
    </>
  );
}
