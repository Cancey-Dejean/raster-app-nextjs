"use client";

import Link from "next/link";
import Container from "../ui/container";
import { NewTabIcon, RasterLogo } from "../ui/svgIcons";
import { ctaButtons, navItems } from "@/lib/dummyData";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { CtaButton } from "@/types";
import { useState } from "react";
import "./Header.css";
import { cn } from "@/lib/utils";
import useCloseMobileMenuOnResize from "@/hooks/useCloseMobileMenuOnResize";

const linkStyles =
  "relative flex items-center gap-1 px-3 py-1 transition-all duration-300 ease-in-out rounded-[6px] hover:bg-white/10";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    document.body.classList.toggle("overflow-hidden");
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 px-8 text-white">
      <Container className="relative flex items-stretch justify-between gap-5 border-b border-b-white/10 py-3">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <RasterLogo />

          <span className="hidden text-lg font-semibold md:inline-block">
            Raster
          </span>
        </Link>

        <Navigation pathname={pathname} />

        <NavigationCTA ctaButtons={ctaButtons} />

        <button
          type="button"
          className={twMerge(
            "hamburger flex size-12 flex-col items-center justify-center gap-1.5 md:hidden",
            menuOpen && "hamburger-open",
          )}
          onClick={handleMenuOpen}
        >
          <span className="hidden">Open Mobile Menu</span>
          <span className="line-1"></span>
          <span className="line-2"></span>
        </button>
      </Container>
      <MobileMenu
        menuOpen={menuOpen}
        pathname={pathname}
        handleMenuOpen={handleMenuOpen}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
}

const Navigation = ({ pathname }: { pathname: string }) => {
  return (
    <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 md:flex">
      <ul className="flex items-center gap-1">
        {navItems.map(({ label, url, newTab }) => (
          <li key={label}>
            <Link
              href={url}
              target={newTab ? "_blank" : "_self"}
              rel={
                newTab ? "noopener noreferrer external nofollow" : "noReferrer"
              }
              className={twMerge(
                "hover:text-red",
                linkStyles,
                pathname === url ? "text-red" : "text-white",
              )}
            >
              {label}

              {newTab && <NewTabIcon className="opacity-40" />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NavigationCTA = ({ ctaButtons }: { ctaButtons: CtaButton[] }) => {
  return (
    <ul className="hidden items-center gap-2 md:flex">
      {ctaButtons.map(({ label, url, newTab, cta }) => (
        <li key={label}>
          <Link
            href={url}
            target={newTab ? "_blank" : "_self"}
            rel={
              newTab ? "noopener noreferrer external nofollow" : "noReferrer"
            }
            className={twMerge(
              linkStyles,
              cta
                ? "bg-red/20 text-red hover:bg-red/50 hover:text-white"
                : "text-white",
            )}
          >
            {label}

            {newTab && <NewTabIcon className="opacity-40" />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  pathname,
  handleMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  pathname: string;
  handleMenuOpen: () => void;
}) => {
  useCloseMobileMenuOnResize(() => setMenuOpen(false));

  return (
    <div
      className={cn(
        "mobile-menu",
        "backdrop-blur-[12px]",
        menuOpen ? "mobile-open" : "",
      )}
    >
      <ul className="flex w-full flex-col justify-center gap-4">
        {navItems.map(({ label, url, newTab }) => (
          <li key={label}>
            <Link
              href={url}
              target={newTab ? "_blank" : "_self"}
              rel={
                newTab ? "noopener noreferrer external nofollow" : "noReferrer"
              }
              className={twMerge(
                "flex items-center gap-1 px-8 py-2 text-2xl",
                pathname === url
                  ? "text-red hover:bg-transparent"
                  : "text-white",
              )}
              onClick={handleMenuOpen}
            >
              {label}

              {newTab && <NewTabIcon className="opacity-40" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
