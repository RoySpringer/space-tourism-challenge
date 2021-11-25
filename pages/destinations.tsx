import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Text from "../components/Text";
import NavBar, { NavBarItem } from "../components/NavBar";
import data from "../shared/jsons/data.json";
import Header from "../components/Header";

const navItemsString: string[] = Object.keys(data);
const navItems: NavBarItem[] = [];
navItems.push({ text: "HOME", navTo: "/" });
for (const item of navItemsString) {
  navItems.push({ text: item.toUpperCase(), navTo: `/${item}` });
}

const Destination: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Tourism | Destination</title>
        <meta name="description" content="The Home Page of Space Tourism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navItems={navItems} />
      <main className={styles.main}>
        <Text h1>{"Destinations".toUpperCase()}</Text>
      </main>
    </div>
  );
};

export default Destination;
