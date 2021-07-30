import React from "react";

import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import PartnerSection from "../../components/PartnerSection";
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
    // Fetch data from butterCms
    butter.page
      .retrieve("*", "home-landing", params)
      .then(function (resp) {
        const Heading = resp?.data?.data?.fields?.sections[0]?.fields?.headline;
        setHeading(Heading);
        const Paragraphs = resp?.data?.data?.fields?.paragraphs;
        setParagraphs(Paragraphs);
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

  const content = paragraphs?.map((paragraph, index) => (
    <div key={index}>
      <div className={styles.shortText}>{paragraph.fields.short_text}</div>
      <div className={styles.longText}>{paragraph.fields.long_text}</div>
    </div>
  ));

  return (
    <>
      <Navbar />
      <HeroSection heading={heading} />
      <PartnerSection />
      <div className={styles.content}>{content}</div>;
      <Footer />
    </>
  );
};
export default Home;
