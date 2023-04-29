import { Avatar } from "@/public/img";
import Image from "next/image";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}

export default function Sidebar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <div className="user text-center pb-50 pe-30">
          <Image
            src={Avatar}
            width="90"
            height="90"
            className="img-fluid mb-20"
            alt=""
          />
          <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
          <p className="color-palette-2 m-0">shayna@anne.com</p>
        </div>
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transactions"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="ic-menu-message" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-menu-settings"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/member" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
