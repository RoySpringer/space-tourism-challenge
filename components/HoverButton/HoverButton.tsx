import React from "react";
import Text from "../Text";
import styles from "./HoverButton.module.css";

export interface HoverButtonProps {
  /**
   * Text of the button
   */
  text: string;
  /**
   * Background color of the button
   */
  backgroundColor?: string;
  /**
   * The color of the text in the button
   */
  color?: string;
  /**
   * The click function
   */
  onClick?: () => void;
}

const HoverButton = (props: HoverButtonProps) => {
  const { text, onClick, backgroundColor, color } = props;
  return (
    <div
      className={styles.hoverButton}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <Text h4 className={styles.hoverButtonText} style={{ color }}>
        {text}
      </Text>
    </div>
  );
};

export default HoverButton;
