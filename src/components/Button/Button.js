import React from "react";
import styles from "./Button.module.css";
import { NavLink } from "react-router-dom";

const Button = ({ to, onClick, Text }) => {
  return (
    <NavLink to={to}>
      <div className={styles.button} onClick={onClick}>
        {Text}
      </div>
    </NavLink>
  );
};

export default Button;
