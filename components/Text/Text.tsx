import React, { PropsWithChildren } from "react";
import styles from "./Text.module.css";

interface Props {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  subHeading1?: boolean;
  subHeading2?: boolean;
  nav?: boolean;
  body?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export type TextProps = PropsWithChildren<Props>;

const Text = (props: TextProps) => {
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    subHeading1,
    subHeading2,
    nav,
    body,
    style,
    className = "",
  } = props;
  if (h1) {
    return (
      <h1 className={`${styles.h1} ${className}`} style={style}>
        {props.children}
      </h1>
    );
  } else if (h2) {
    return (
      <h2 className={`${styles.h2} ${className}`} style={style}>
        {props.children}
      </h2>
    );
  } else if (h3) {
    return (
      <h3 className={`${styles.h3} ${className}`} style={style}>
        {props.children}
      </h3>
    );
  } else if (h4) {
    return (
      <h4 className={`${styles.h4} ${className}`} style={style}>
        {props.children}
      </h4>
    );
  } else if (h5) {
    return (
      <h5 className={`${styles.h5} ${className}`} style={style}>
        {props.children}
      </h5>
    );
  } else if (subHeading1) {
    return (
      <h6 className={`${styles.subHeading1} ${className}`} style={style}>
        {props.children}
      </h6>
    );
  } else if (subHeading2) {
    return (
      <h6 className={`${styles.subHeading2} ${className}`} style={style}>
        {props.children}
      </h6>
    );
  } else if (nav) {
    return (
      <p className={`${styles.nav} ${className}`} style={style}>
        {props.children}
      </p>
    );
  } else if (body) {
    return (
      <p className={`${styles.body} ${className}`} style={style}>
        {props.children}
      </p>
    );
  } else {
    return (
      <p className={`${className}`} style={style}>
        {props.children}
      </p>
    );
  }
};

export default Text;
