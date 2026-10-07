import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import GoogleReviews from "../components/GoogleReviews";
import RegionalSEO from "../components/RegionalSEO";
import PageTitle from "../components/PageTitle";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <PageTitle title="Home" isHome />
      <Hero />
      <About />
      <Services />
      <Contact />
      <GoogleReviews />
      <RegionalSEO />
    </>
  );
}
