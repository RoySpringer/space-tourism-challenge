import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Text from "../components/Text";
import HoverButton from "../components/HoverButton";
import NavBar, { NavBarItem } from "../components/NavBar";
import data from "../shared/jsons/data.json";

const navItemsString: string[] = Object.keys(data);
const navItems: NavBarItem[] = [];
navItems.push({ text: "HOME", navTo: "/" });
for (const item of navItemsString) {
  navItems.push({ text: item.toUpperCase(), navTo: `/${item}` });
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Tourism | Home</title>
        <meta name="description" content="The Home Page of Space Tourism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/assets/shared/logo.svg"
            alt="The logo of the webpage"
            width={48}
            height={48}
          />
        </div>
        <hr className={styles.hr} />
        <NavBar navItems={navItems} />
      </header>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Text h5>SO, YOU WANT TO TRAVEL TO</Text>
          <Text h1>SPACE</Text>
          <Text body className={styles.bodyText}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </div>
        <div className={`${styles.grid}`}>
          <HoverButton text="EXPLORER" />
        </div>
      </main>
    </div>
  );
};

export default Home;
