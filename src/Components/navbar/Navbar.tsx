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
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import brandlogo from "../../assets/logo/logo-1.png";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ShopingCart from "../ShopingCart/ShopingCart";
import { useLocation } from "react-router-dom";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
                <div className="flex flex-shrink-0 items-center">
                  <img
                    alt="Brand logo"
                    src={brandlogo}
                    className="h-7 w-auto"
                  />
                </div>
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
                <button
                  onClick={handleImageClick}
                  type="button"
                  className="relative rounded-full  p-1 text-gray-300 hover:text-white focus:outline-none "
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                </button>
                {isOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative">
                      <button
                        className="absolute top-0 right-0 mt-2 mr-2 text-black text-2xl font-bold"
                        onClick={closeModal}
                      >
                        &times;
                      </button>
                      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                          <div className="md:shrink-0">
                            <img
                              className="h-48 w-full object-cover md:h-full md:w-48"
                              src="https://loremflickr.com/g/320/240/team"
                            />
                          </div>
                          <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                              Company retreats
                            </div>
                            <a
                              href="#"
                              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                            >
                              Incredible accommodation for your team
                            </a>
                            <p className="mt-2 text-slate-500">
                              Looking to take your team away on a retreat to
                              enjoy awesome food and take in some sunshine? We
                              have a list of places to do just that.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Cart dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton
                      onClick={() => setOpen(true)}
                      className="relative flex rounded-full p-1 text-gray-300 hover:text-white focus:outline-none"
                    >
                      <ShoppingCartIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                      />
                      <ShopingCart open={open} setOpen={setOpen}></ShopingCart>
                    </MenuButton>
                  </div>
                </Menu>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full p-1 text-gray-300 hover:text-white focus:outline-none">
                      <UserIcon aria-hidden="true" className="h-6 w-6" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Sign out
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
