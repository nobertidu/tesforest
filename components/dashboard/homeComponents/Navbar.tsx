import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "HOME", path: "/dashboard" },
  { name: "PROJECT", path: "/dashboard/project" },
  { name: "VOLUNTEER", path: "/dashboard/volunteer" },
  { name: "BLOG", path: "/dashboard/blog" },
  { name: "PLANT A TREE", path: "/dashboard/plant-a-tree" },
];

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 px-6 md:px-0 flex flex-col items-center relative">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden absolute top-6 right-6">
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#007741]">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:inline-flex bg-[#f0f0f0] rounded-full px-6 py-4">
        <ul className="flex space-x-10 text-[#7a7a7a88] font-semibold text-[14px]">
          {navItems.map((item) => {
            const isActive =
              item.path === "/dashboard"
                ? currentPath === "/dashboard"
                : currentPath.startsWith(item.path);

            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-[#007741]" : "hover:text-[#007741]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full mt-4 md:hidden">
          <ul className="flex flex-col items-center space-y-4 font-semibold text-[14px] text-[#7a7a7a88]">
            {navItems.map((item) => {
              const isActive =
                item.path === "/dashboard"
                  ? currentPath === "/dashboard"
                  : currentPath.startsWith(item.path);

              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`transition-colors duration-200 ${
                      isActive ? "text-[#007741]" : "hover:text-[#007741]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
