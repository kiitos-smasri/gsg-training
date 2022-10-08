import styles from "./styles.module.css";
import ListItems from "./ListItems";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <ListItems />

      <div>Right icons</div>
    </div>
  );
};

export default Header;
