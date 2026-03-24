import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Team from "../components/Team";
import Service from "../components/Service";
import Pricing from "../components/Pricing";
import Contacts from "../components/Contacts"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Team />
      <Service/>
      <Pricing />
      <Contacts />
    </>
  );
}
