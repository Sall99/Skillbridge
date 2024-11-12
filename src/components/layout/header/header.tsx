"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import clsx from "clsx";

import { HEADER_LINKS } from "@/constants";
import { Button } from "@/components";

interface MenuBurgerProps {
  toggleMenu: () => void;
}

interface MenuMobileProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Logo = () => {
  return (
    <div className="relative h-_44 w-_44 2xl:h-_54 2xl:w-_54">
      <Link href="/">
        <Image src="/img/Logo.png" alt="logo" fill />
      </Link>
    </div>
  );
};

const MenuBurger = ({ toggleMenu }: MenuBurgerProps) => {
  return (
    <motion.div
      className="relative h-4 w-6 lg:hidden"
      onClick={toggleMenu}
      whileTap={{ scale: 0.9 }}
    >
      <Image src="/img/menu-burger.png" alt="Menu Burger" fill />
    </motion.div>
  );
};

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-_26 lg:flex">
      {HEADER_LINKS.map(({ title, path }, key) => {
        const isActive = pathname === path;
        return (
          <li
            key={key}
            className={clsx(
              "flex h-full items-center justify-center rounded-lg px-5 py-3 text-sm transition-colors duration-300 ease-in-out 2xl:text-lg",
              isActive ? "bg-gray-100" : "bg-transparent",
            )}
          >
            <Link href={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const NavLinksMobile = () => {
  return (
    <ul className="flex flex-col items-center gap-_26">
      {HEADER_LINKS.map(({ title, path }, key) => {
        return (
          <li
            key={key}
            className={clsx(
              "flex h-full items-center justify-center rounded-lg px-5 py-3 text-sm transition-colors duration-300 ease-in-out 2xl:text-lg",
            )}
          >
            <Link href={path}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const AuthLinks = () => {
  return (
    <div className={"flex items-center justify-center gap-_30 md:flex-row"}>
      <Link href="/sign-up" className="text-sm 2xl:text-lg">
        Sign up
      </Link>
      <Link href="/login">
        <Button size="medium">Login</Button>
      </Link>
    </div>
  );
};

const MobileMenu = ({ isMenuOpen, toggleMenu }: MenuMobileProps) => (
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        className="abs fixed inset-0 z-50 bg-white lg:hidden"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <NavLinksMobile />
        </div>
        <motion.div
          className="absolute left-5 top-5 z-50"
          whileTap={{ scale: 0.9 }}
        >
          <X size={24} onClick={toggleMenu} />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="m-auto max-w-_1920 px-4 lg:px-_30">
      <div className="flex justify-between py-5 transition-all duration-500 ease-in-out xl:px-_132">
        <div className="flex items-center gap-_50">
          <Logo />
          <NavLinks />
        </div>
        <div className="flex items-center justify-center gap-_30">
          <AuthLinks />
          <MenuBurger toggleMenu={toggleMenu} />
        </div>
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
