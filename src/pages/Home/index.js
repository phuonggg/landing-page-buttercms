import React from "react";

import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import PartnerSection from "../../components/PartnerSection";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

import styles from "./index.module.scss";

import { useState, useEffect } from "react";
import Butter from "buttercms";

const butter = Butter(process.env.REACT_APP_BUTTER_ECOMMERCE);

const Home = () => {
  const [heading, setHeading] = useState();
  const [paragraphs, setParagraphs] = useState();

  const params = {
    preview: 1,
  };

  const fetchData = () => {
    butter.page
      .retrieve("*", "home-landing", params)
      .then(function (resp) {
        console.log("resp:", resp);
        const Heading = resp?.data?.data?.fields?.sections[0]?.fields?.headline;
        setHeading(Heading);
        console.log("heading:", Heading);
        const Paragraphs = resp?.data?.data?.fields?.paragraphs;
        setParagraphs(Paragraphs);
        console.log("paragraph", Paragraphs);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  };

  useEffect(() => {
    if (heading && paragraphs) {
      return;
    }

    fetchData();
  }, [heading, paragraphs]);

  return (
    <>
      <Navbar />
      <HeroSection heading={heading} />
      <PartnerSection />
      <Content paragraphs={paragraphs} />
      <Footer />
    </>
  );
};
export default Home;
