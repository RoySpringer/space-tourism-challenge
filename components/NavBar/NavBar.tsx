import React from "react";
import Text from "../Text";
import styles from "./NavBar.module.css";

export interface NavBarItem {
  text: string;
  navTo?: string;
  onClick?: () => void;
}

export interface NavBarProps {
  navItems: NavBarItem[];
  activeIndex?: number;
}

const NavBar = (props: NavBarProps) => {
  const { navItems, activeIndex = 0 } = props;
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarUl}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navBarLi} onClick={item.onClick}>
            <a
              href={item.navTo ?? "#"}
              className={`${styles.navBarA} ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <Text nav className={styles.navBarNumber}>
                {index < 10 ? `0${index}` : index}
              </Text>
              <Text nav>{item.text}</Text>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;