import { FunctionComponent } from "react";
import styles from "../styles/Layout.module.css";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <span>© A. Sl. - portfolio</span>
    </footer>
  );
};

export default Footer;
