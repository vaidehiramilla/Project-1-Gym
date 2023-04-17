import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.gymContainer}>
        <NavLink className={styles.linkGym} to="/">
          Gym
        </NavLink>
      </div>
      <div className={styles.linkContainer}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="aboutus">
          About Us
        </NavLink>
        <NavLink className={styles.link} to="classes">
          Classes
        </NavLink>
        <NavLink className={styles.link} to="blogs">
          Blogs
        </NavLink>
      </div>
      <div className={styles.joinBtn}>
        <NavLink className={styles.linkJoin} to="login">
          Join Us
        </NavLink>
      </div>
      {/* <NavLink className={styles.link} to="login">
        Join Us
      </NavLink> */}
      {/* <NavLink className={styles.link} to='register'>Register</NavLink> */}
    </div>
  );
}
