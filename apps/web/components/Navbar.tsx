import { FunctionComponent, useState } from "react";
import styles from "../styles/Layout.module.css";
import {
  BiHomeHeart,
  BiGitBranch,
  BiMessageRoundedDetail,
  BiUser,
  BiMenuAltRight,
  BiX,
} from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarProps {}

const iconsWhite = "#fff";
const iconsBlack = "#000000a3";

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const navIcons = [
    { icon: <BiHomeHeart size={"100%"} color={iconsWhite} />, href: "/" },
    { icon: <BiUser size={"100%"} color={iconsWhite} />, href: "/about" },
    {
      icon: <BiGitBranch size={"100%"} color={iconsWhite} />,
      href: "/projects",
    },
    {
      icon: <BiMessageRoundedDetail size={"100%"} color={iconsWhite} />,
      href: "/contact",
    },
  ];
  return (
    <header>
      <nav className={styles.mainNav}>
        <ul>
          {navIcons.map((icon) => {
            const underline = router.pathname === icon.href;
            return (
              <li className={underline ? styles.active : ""}>
                <Link href={`${icon.href}`}>{icon.icon}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav
        className={`${styles.mobileNav} ${mobileOpen && styles.mobileNavOpen}`}
      >
        {mobileOpen ? (
          <div className={styles.mobileBar}>
            <div className={styles.mobileBarMenuIcons}>
              <div className={styles.iconWrapper}>
                <BiHomeHeart size={41} color={iconsBlack} />
              </div>
              <div className={styles.iconWrapper}>
                <BiUser size={41} color={iconsBlack} />
              </div>
              <div className={styles.iconWrapper}>
                <BiGitBranch size={41} color={iconsBlack} />
              </div>
              <div className={styles.iconWrapper}>
                <BiMessageRoundedDetail size={41} color={iconsBlack} />
              </div>
            </div>
            <div
              className={styles.mobileBarCloseIcon}
              onClick={() => setMobileOpen(false)}
            >
              <BiX size={35} color={"black"} />
            </div>
          </div>
        ) : (
          <div onClick={() => setMobileOpen(true)}>
            <BiMenuAltRight size={80} color={iconsWhite} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
