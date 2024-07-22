"use client";

import { navbarData } from "@/static-data/navbar";
import { onScroll } from "@/utils/scrollActive";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalSearchModal from "../GlobalSearch";
import ThemeToggler from "./ThemeToggler";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslate } from "@/hooks/useTranslate";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const { data: session } = useSession();

  const { language, setLanguage } = useTranslate();

  const t = useTranslations("Navbar");

  const pathUrl = usePathname();

  const navigationHandler = () => {
    setNavigationOpen(!navigationOpen);
    if (typeof window !== "undefined") {
      document.body.classList.toggle("max-lg:overflow-hidden", !navigationOpen);
    }
  };

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header absolute left-0 top-0 w-full ${stickyMenu ? "sticky-navbar" : ""}`}
      >
        <div className="flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20">
          <div className="relative z-[80] max-w-[250px] pr-4 lg:w-full lg:max-w-[220px] xl:max-w-[280px]">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Logo-uk-bebas/Transparan.png"
                alt="logo"
                width={215}
                height={50}
                className="hidden dark:block"
              />
              <div className="png-container">
                <Image
                  src="/images/Logo-uk-bebas/Transparan.png"
                  alt="logo"
                  width={215}
                  height={50}
                  className="dark:hidden"
                />
              </div>
            </Link>
          </div>

          <div
            className={`menu-wrapper fixed left-0 top-0 z-50 h-screen w-full justify-center bg-white p-5 dark:bg-dark lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent ${navigationOpen ? "show" : ""}`}
          >
            <div className="w-full self-center">
              <nav>
                <ul className="navbar flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-x-6 lg:space-y-0 xl:space-x-10">
                  {navbarData.map((item) => (
                    <li
                      key={item?.id}
                      className={`${item?.submenu ? "submenu-item group relative" : ""}`}
                    >
                      {item?.href ? (
                        <Link
                          href={
                            item?.href
                              ? item?.external
                                ? item.href
                                : item?.href
                                  ? `/${item.href}`
                                  : "/"
                              : "/"
                          }
                          target={item?.external ? "_blank" : ""}
                          onClick={navigationHandler}
                          className={`${pathUrl === item?.href ? "active" : ""} inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white ${item?.href?.startsWith("#") ? "menu-scroll" : ""}`}
                        >
                          {t(item?.title)}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => setDropdownToggler(!dropdownToggler)}
                            className="submenu-taggler inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                          >
                            {item?.title}

                            <span className="pl-3">
                              <svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                className={`fill-current ${dropdownToggler ? "rotate-180" : ""}`}
                              >
                                <path d="M6.54564 5.09128L11.6369 0L13.0913 1.45436L6.54564 8L0 1.45436L1.45436 0L6.54564 5.09128Z" />
                              </svg>
                            </span>
                          </button>
                          {item?.submenu && (
                            <ul
                              className={`${dropdownToggler ? "" : "hidden lg:block"} submenu space-y-5 pt-5 transition duration-300 lg:invisible lg:absolute lg:top-[120%] lg:w-[250px] lg:rounded lg:border lg:bg-white lg:px-8 lg:pb-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:border-transparent dark:lg:bg-[#2C3443]`}
                            >
                              {item?.submenu.map((item) => (
                                <li key={item?.id}>
                                  <Link
                                    href={item?.href}
                                    onClick={navigationHandler}
                                    className={`inline-flex items-center justify-center text-center font-heading text-base ${pathUrl === item?.href ? "text-primary dark:text-white" : "text-dark-text hover:text-primary dark:hover:text-white"}`}
                                  >
                                    {item?.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            {/* <div className="absolute bottom-0 left-0 flex w-full items-center justify-between space-x-5 self-end p-5 lg:static lg:w-auto lg:self-center lg:p-0">
              {session ? (
                <>
                  <p className="whitespace-nowrap text-dark-text dark:text-white">
                    {session?.user?.name}
                  </p>
                  <button
                    aria-label="SignOut"
                    onClick={() => signOut()}
                    className="whitespace-nowrap font-medium text-dark-text hover:text-primary"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="w-full whitespace-nowrap rounded bg-primary px-6 py-3 text-center font-heading text-white hover:bg-opacity-90 lg:w-auto"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="w-full whitespace-nowrap rounded bg-[#222C40] px-6 py-3 text-center font-heading text-white hover:bg-opacity-90 lg:w-auto"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div> */}
          </div>

          <div className="z-580flex absolute right-5 top-1/2 -translate-y-1/2 items-center lg:static lg:ml-4 lg:translate-y-0 xl:ml-6">
            <div className="flex items-center justify-end">
              <Select onValueChange={(lang) => setLanguage(lang)}>
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder={language.toLocaleUpperCase()} />
                </SelectTrigger>
                <SelectContent className="z-[999]">
                  <SelectItem value="id">ID</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative flex h-10 w-10 items-center justify-center">
                <ThemeToggler />
              </div>
            </div>

            <button
              onClick={navigationHandler}
              className="z-580flex relative h-10 w-10 items-center justify-center text-dark-text dark:text-white lg:hidden"
            >
              {navigationOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="fill-current"
                >
                  <path d="M14.0002 11.8226L21.6228 4.20001L23.8002 6.37745L16.1776 14L23.8002 21.6226L21.6228 23.8L14.0002 16.1774L6.37763 23.8L4.2002 21.6226L11.8228 14L4.2002 6.37745L6.37763 4.20001L14.0002 11.8226Z" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  className="fill-current"
                >
                  <path d="M2.75 3.66666H19.25V5.49999H2.75V3.66666ZM2.75 10.0833H19.25V11.9167H2.75V10.0833ZM2.75 16.5H19.25V18.3333H2.75V16.5Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        <GlobalSearchModal
          searchModalOpen={searchModalOpen}
          setSearchModalOpen={setSearchModalOpen}
        />
      )}
    </>
  );
}
