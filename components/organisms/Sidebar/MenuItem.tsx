import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transactions"
    | "ic-menu-message"
    | "ic-menu-card"
    | "ic-menu-rewards"
    | "ic-menu-settings"
    | "ic-menu-logout";

  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;

  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem}>
      <Image
        src={`/icon/${icon}.svg`}
        width={25}
        height={25}
        alt=""
        className="icon me-3"
      />
      <p className="item-title m-0">
        <Link href={`${href}`} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
