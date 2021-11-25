import React from "react";
import NavBar, { NavBarItem } from "../NavBar";
import Image from "next/image";
import styles from "./Header.module.css";

interface HeaderProps {
  navItems: NavBarItem[];
}

const Header = (props: HeaderProps) => {
  const { navItems } = props;
  return (
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
      <NavBar navItems={navItems} className={styles.navBar} />
    </header>
  );
};

export default Header;
