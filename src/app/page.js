import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen">
      <Nav />
      <Hero />
      <Featured/>
      <Banner />
      <Footer />
    </div>
  );
}
