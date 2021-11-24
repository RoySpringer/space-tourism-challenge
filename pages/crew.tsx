import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Text from "../components/Text";
import NavBar, { NavBarItem } from "../components/NavBar";
import data from "../shared/jsons/data.json";

const navItemsString: string[] = Object.keys(data);
const navItems: NavBarItem[] = [];
navItems.push({ text: "HOME", navTo: "/" });
for (const item of navItemsString) {
  navItems.push({ text: item.toUpperCase(), navTo: `/${item}` });
}

const Crew: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Tourism | Crew</title>
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
        <Text h1>{"Crew".toUpperCase()}</Text>
      </main>
    </div>
  );
};

export default Crew;
