import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Contactusform from './Contactus';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Use Case", href: "#usecase-section", current: false },
  { name: "Architecture", href: "#architecture-section", current: false },
  { name: "Data Sets", href: "#dataset-section", current: false },
  { name: "Performance", href: "#performance-section", current: false },
  { name: "HPC", href: "#hpc-section", current: false },
  { name: "Challenges", href: "#challenges-section", current: false },
  { name: "Learnings", href: "#learnings-section", current: false },
  { name: "Repos", href: "#repos-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <img
                  className="hidden h-16 w-16 lg:block"
                  src="/images/Logo/figure.png"
                  alt="Figure"
                />
                <img
                  className="hidden h-24 w-24 pb-2 lg:block"
                  src="/images/Logo/logo.png"
                  alt="Logo"
                />
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks text-white hover:text-offwhite hover-underline",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* <button className="hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 navbutton text-white">
                Connect Wallet
              </button> */}
              {/* <Contactusform /> */}
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
