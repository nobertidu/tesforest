import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navBarItems } from "../../utils/navBarItems";
import Button from "../Button";
import Select from "../Select";
import styles from "./NavBar.module.scss";
import ModalContext from "../../contexts/modalContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type NavBarProps = {
  style?: any;
};

const NavBar = ({ style }: NavBarProps) => {
  const { route, push } = useRouter();
  const modal: any = useContext(ModalContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigate = (path: string) => {
    push(path);
    setDropdownOpen(false);
  };

  return (
    <nav className={styles.navWrapper}>
      {/* Left Nav Items */}
      <div className={styles.navBarContainer}>
        {navBarItems.map((item: any, i: any) => (
          <Link href={item.navigate} key={`navBarItems-${i}`}>
            <div
              className={`${styles.navBarItem} ${
                route === item.navigate ? styles.active : ``
              }`}
              style={{ ...style }}
            >
              {item.title}
            </div>
          </Link>
        ))}

        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="bg-white text-black font-semibold px-4 py-2 rounded-full flex items-center gap-2"
          >
            {route === "/dashboard" ? "Dashboard" : "Homepage"}
            {dropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {dropdownOpen && (
            <div className="absolute mt-2 w-full bg-white shadow-lg rounded-md py-2 z-50">
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleNavigate("/")}
              >
                Homepage
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleNavigate("/dashboard")}
              >
                Dashboard
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Connect Wallet Button */}
      <div onClick={() => modal.handleConnect()}>
        <Button
          title={
            modal.isConnected
              ? `${modal?.accountAddress?.substr(
                  0,
                  2
                )}...${modal?.accountAddress?.substr(
                  modal?.accountAddress.length - 4,
                  4
                )}`
              : "Connect"
          }
          style={{}}
        />
      </div>

      {/* Mobile version */}
      <div className={styles.mobileContainer}>
        <Select navBarItems={navBarItems} />
        <Button title={`DONATE NOW`} link={`/donate`} min />
      </div>
    </nav>
  );
};

export default NavBar;
