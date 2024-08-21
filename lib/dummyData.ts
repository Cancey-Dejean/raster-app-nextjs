import { ButtonItem, CtaButton, LinkItem } from "@/types";

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

export const companies = [
  {
    url: "https://vercel.com",
    image: "/images/vercel.svg",
    alt: "Vercel",
  },
  {
    url: "https://www.macstadium.com/",
    image: "/images/mac-stadium.svg",
    alt: "MacStadium",
  },
  {
    url: "https://www.realthread.com/",
    image: "/images/real-thread.svg",
    alt: "Real Thread",
  },
  {
    url: "https://monogram.io/",
    image: "/images/monogram.svg",
    alt: "Monogram",
  },
  {
    url: "https://www.goodnature.com/",
    image: "/images/good-nature.svg",
    alt: "Good Nature",
  },
  {
    url: "https://backtrace.io/",
    image: "/images/backtrace.svg",
    alt: "Backtrace",
  },
  {
    url: "https://www.birchbox.com/",
    image: "/images/birchbox.svg",
    alt: "Birchbox",
  },
  {
    url: "https://www.hy-vee.com/",
    image: "/images/hy-vee.svg",
    alt: "Hy-Vee",
  },
  {
    url: "https://checklyhq.com/",
    image: "/images/checkly.svg",
    alt: "Checkly",
  },
  {
    url: "https://gohealthuc.com/",
    image: "/images/go-health.svg",
    alt: "Go Health",
  },
];

export const buttons = [
  {
    label: "Get started for free",
    url: "/#get-started",
    newTab: true,
    variant: "ghost",
    size: "default",
  },
];
