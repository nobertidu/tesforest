import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navBarItems } from "../../utils/navBarItems";
import Button from "../Button";
import styles from "./NavBar.module.scss";
import ModalContext from "../../contexts/modalContext";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

type NavBarProps = {
  style?: any;
};

const NavBar = ({ style }: NavBarProps) => {
  const { route, push } = useRouter();
  const modal: any = useContext(ModalContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigate = (path: string) => {
    push(path);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`${styles.navWrapper} bg-white/70 md:bg-transparent shadow-sm md:shadow-none fixed w-full z-50`}
    >
      {/* Mobile Header */}
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        {/* Logo or Brand Name */}
        <div className="font-bold text-[14px] text-[#007741]">
          ROBURNA FOREST
        </div>

        <div className="flex items-center space-x-3">
          {/* Connect Button - Mobile (Top Right) */}
          <div onClick={() => modal.handleConnect()}>
            <Button
              title={
                modal.isConnected
                  ? `${modal?.accountAddress?.substr(
                      0,
                      4
                    )}...${modal?.accountAddress?.substr(-4)}`
                  : "Connect"
              }
              min
              className="text-sm py-1 px-3"
            />
          </div>

          {/* Donate Button */}
          <Button
            title="DONATE"
            link="/donate"
            min
            className="text-sm py-1 px-3"
          />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#007741]"
          >
            {mobileMenuOpen ? (
              <>{FiX({ size: 24 })}</>
            ) : (
              <>{FiMenu({ size: 24 })}</>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-lg">Menu</h3>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#007741] hover:text-gray-700"
            >
              <>{FiX({ size: 20 })}</>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navBarItems.map((item, i) => (
              <Link href={item.navigate} key={`mobile-nav-${i}`}>
                <div
                  className={`px-4 py-3 rounded-lg transition-colors ${
                    route === item.navigate
                      ? "bg-blue-50 text-[#007741] font-semibold"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                  onClick={() => handleNavigate(item.navigate)}
                >
                  {item.title}
                </div>
              </Link>
            ))}

            {/* Dropdown Section */}
            <div className="pt-4">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
              >
                <span>{route === "/dashboard" ? "Dashboard" : "Homepage"}</span>
                {dropdownOpen ? (
                  <>{FiChevronUp({ size: 16 })}</>
                ) : (
                  <>{FiChevronDown({ size: 16 })}</>
                )}
              </button>

              {dropdownOpen && (
                <div className="pl-6 space-y-1 mt-1">
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                    onClick={() => handleNavigate("/")}
                  >
                    Homepage
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                    onClick={() => handleNavigate("/dashboard")}
                  >
                    Dashboard
                  </button>
                </div>
              )}
            </div>
          </div>

        
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          {/* Navigation Items */}
          {navBarItems.map((item, i) => (
            <Link href={item.navigate} key={`desktop-nav-${i}`}>
              <div
                className={`${styles.navBarItem} ${
                  route === item.navigate ? styles.active : ""
                }  transition-colors`}
              >
                {item.title}
              </div>
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 hover:text-black bg-white px-3 py-2 rounded-full transition-colors"
            >
              <span>{route === "/dashboard" ? "Dashboard" : "Homepage"}</span>
              {dropdownOpen ? (
                <>{FiChevronUp({ size: 16 })}</>
              ) : (
                <>{FiChevronDown({ size: 16 })}</>
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-1 z-50 border border-gray-200">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                  onClick={() => handleNavigate("/")}
                >
                  Homepage
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                  onClick={() => handleNavigate("/dashboard")}
                >
                  Dashboard
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center space-x-4">
          <Button title="DONATE NOW" link="/donate" />
          <div onClick={() => modal.handleConnect()}>
            <Button
              title={
                modal.isConnected
                  ? `${modal?.accountAddress?.substr(
                      0,
                      4
                    )}...${modal?.accountAddress?.substr(-4)}`
                  : "Connect Wallet"
              }
              primary
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
