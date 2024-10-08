import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  Bars4Icon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import brandlogo from "../../assets/logo/logo-1.png";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ShopingCart from "../ShopingCart/ShopingCart";
import { useLocation } from "react-router-dom";
import SearchField from "../SearchField/SearchField";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "Products", href: "/products", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const hideNavbarRoutes = ["/checkout"];

  const isNavbarVisible = !hideNavbarRoutes.includes(location.pathname);

  const [open, setOpen] = useState(false);

  return (
    <>
      {isNavbarVisible && (
        <Disclosure as="nav" className="absolute z-10 w-full">
          <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-12">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* brand logo */}
                <a href="/" className="flex flex-shrink-0 items-center">
                  <img
                    alt="Brand logo"
                    src={brandlogo}
                    className="h-6 md:h-7 lg:h-7 w-auto"
                  />
                </a>
                {/* desktop view menu item */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-gray-300 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* right side item */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* search field */}
                <SearchField></SearchField>
                {/* Cart dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton
                      onClick={() => setOpen(true)}
                      className="relative flex rounded-full p-1 text-gray-300 hover:text-white focus:outline-none"
                    >
                      <ShoppingCartIcon
                        aria-hidden="true"
                        className="h-5 w-5 lg:h-6 lg:w-6 md:h-6 md:w-6"
                      />
                      <ShopingCart open={open} setOpen={setOpen}></ShopingCart>
                    </MenuButton>
                  </div>
                </Menu>
                <Menu as="div" className="relative ml-3">
                  <div className="text-gray-400 font-semibold text-lg">|</div>
                </Menu>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full p-1 text-gray-300 hover:text-white focus:outline-none">
                      <UserIcon
                        aria-hidden="true"
                        className="h-5 w-5 lg:h-6 lg:w-6 md:h-6 md:w-6"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded bg-gray-700 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="/dashboard"
                        className="flex gap-2 flex-row px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-600"
                      >
                        <Bars4Icon className="w-5 h-5"></Bars4Icon>
                        Dashboard
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/profile"
                        className="flex gap-2 flex-row px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-600"
                      >
                        <UserCircleIcon className="w-5 h-5"></UserCircleIcon>
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/login"
                        className="px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-600 flex gap-2 flex-row"
                      >
                        <ArrowRightStartOnRectangleIcon className="w-5 h-5"></ArrowRightStartOnRectangleIcon>
                        <span>Login</span>
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      )}
    </>
  );
}
