import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./../styles/components/navbarItem.module.css";

type Props = {
  href: string;
  children: any;
};

const NavbarItem = ({ href, children }: Props) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className={path === href ? styles.active : ""}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default NavbarItem;
