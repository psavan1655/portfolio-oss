import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageHead from "@/components/common/PageHead";
import Page from "@/components/common/Page";
import HeroSection from "@/components/hero-section/hero-section";
import Header from "@/components/common/header/header";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const heroSectionRef = useRef(null);
  // TODO: Update this logic
  // const isHeroSectionIntersecting = useOnScreen(heroSectionRef);

  return (
    <>
      <PageHead />
      <Header />
      <Page>
        <HeroSection />
      </Page>
    </>
  );
}
