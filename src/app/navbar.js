import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  );
}
