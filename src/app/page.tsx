"use client";
import Head from "next/head";
import WhatsAppWidget from "@/pages/WhatsappWidjet";
import Banner from "./banner";
import Footer from "./footer";
import Offerings from "./offerings/page";
import Results from "./results/page";
import WhoWeWorkWith from "./workWith/page";
import Header from "./header/page";
import ContactUs from "./contactus";

export default function Home() {
  const handleGetInTouchClick = () => {
    const contactUsSection = document.getElementById("contact-us");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Head>
        <title>LR Technosphere</title>
        <meta
          name="description"
          content="This page contains what value LR technosphere can add to the clients businesses and what are all services it offers."
        />
        <meta
          name="keywords"
          content="Custom Software development, IT Services, AI Services, India, APAC, Middle east, USA, Europe"
        />
        <meta property="og:title" content="Home page of Bainevo" />
        <meta
          property="og:description"
          content="his page contains what value to the clients businesses and what are all services it offers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/page" />
        <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
      </Head>
      <div className=" flex justify-center mx-auto ">
        <Header getInTouchClick={handleGetInTouchClick} />
      </div>
      <Banner />
      <Results />
      <Offerings />
      <WhoWeWorkWith />
      <div id="contact-us">
        <ContactUs />
      </div>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
