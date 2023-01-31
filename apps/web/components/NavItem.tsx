import Link from "next/link";
import { IconType } from "react-icons";

interface NavItemProps {
  text?: string;
  href: string;
  active: boolean;
  icon: JSX.Element;
}

const NavItem = ({ text, href, active, icon }: NavItemProps) => {
  return (
    <Link href={`${href}`}>
      {text}
      {icon}
    </Link>
  );
};

export default NavItem;
