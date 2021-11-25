import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Text from "../Text";
import styles from "./NavBar.module.css";
import { useRouter } from "next/dist/client/router";

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
  const router = useRouter();
  const navBar = useRef<HTMLElement>(null);
  const indicator = useRef<HTMLDivElement>(null);
  const indicatorHover = useRef<HTMLDivElement>(null);
  const linkItems = useRef<(HTMLAnchorElement | null)[]>([]);

  const placeIndicator = function (
    indicatorEl: HTMLElement,
    target: HTMLElement
  ) {
    const navBarRect = navBar.current?.getBoundingClientRect();
    const elementRect = target.getBoundingClientRect();
    indicatorEl.style.left = `calc(${
      elementRect.x - (navBarRect?.x ?? 0) ?? 0
    }px + 2rem)`;
    indicatorEl.style.width = `calc(${elementRect.width * 0.9}px - 4rem)`;
  };

  const onHover = useCallback((event) => {
    if (event.target.tagName === "A" && indicatorHover.current) {
      placeIndicator(indicatorHover.current, event.target);
    }
    return false;
  }, []);

  const onLeave = useCallback((event) => {
    if (event.target.tagName === "A") {
      for (const item of linkItems.current) {
        if (item?.classList.contains("active") && indicatorHover.current) {
          placeIndicator(indicatorHover.current, item);
        }
      }
    }
    return false;
  }, []);

  useEffect(() => {
    for (const item of linkItems.current) {
      if (
        item?.classList.contains("active") &&
        indicator.current &&
        indicatorHover.current
      ) {
        placeIndicator(indicator.current, item);
        indicator.current.style.opacity = "1";
        placeIndicator(indicatorHover.current, item);
      }
    }
  }, []);

  return (
    <nav ref={navBar} className={styles.navBar}>
      <ul className={styles.navBarUl}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navBarLi} onClick={item.onClick}>
            <Link href={item.navTo ?? "#"}>
              <a
                ref={(instance) => {
                  linkItems.current.push(instance);
                }}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className={`${styles.navBarA} ${
                  router.pathname === item.navTo ? "active" : ""
                }`}
              >
                <Text nav className={styles.navBarNumber}>
                  {index < 10 ? `0${index}` : index}
                </Text>
                <Text nav>{item.text}</Text>
              </a>
            </Link>
          </li>
        ))}
        <div ref={indicator} className={styles.indicator}></div>
        <div ref={indicatorHover} className={styles.indicatorHover}></div>
      </ul>
    </nav>
  );
};

export default NavBar;
