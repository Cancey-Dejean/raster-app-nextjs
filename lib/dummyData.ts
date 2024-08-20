import { CtaButton, LinkItem } from "@/types";

export const navItems: LinkItem[] = [
  { label: "Changelog", url: "/changelog", newTab: false },
  { label: "Pricing", url: "/pricing", newTab: false },
  { label: "Blog", url: "/blog", newTab: false },
  { label: "Docs", url: "/docs", newTab: true },
  { label: "Careers", url: "/careers", newTab: false },
];

export const ctaButtons: CtaButton[] = [
  { label: "Register", url: "/register", newTab: false, cta: true },
  { label: "Sign in", url: "/sign-in", newTab: false, cta: false },
];
