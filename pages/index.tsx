import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Text from "../components/Text";
import HoverButton from "../components/HoverButton";
import NavBar, { NavBarItem } from "../components/NavBar";
import data from "../shared/jsons/data.json";
import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";

const navItemsString: string[] = Object.keys(data);
const navItems: NavBarItem[] = [];
navItems.push({ text: "HOME", navTo: "/" });
for (const item of navItemsString) {
  navItems.push({ text: item.toUpperCase(), navTo: `/${item}` });
}

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Tourism | Home</title>
        <meta name="description" content="The Home Page of Space Tourism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navItems={navItems} />
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
          <HoverButton
            text="EXPLORER"
            onClick={() => {
              router.push("/destinations");
            }}
          />
        </div>
      </main>
    </div>
  );
};
export default Home;
