export type LinkItem = {
  label: string;
  url: string;
  newTab?: boolean;
};

export type ButtonItem = ButtonProps & LinkItem;

export type CtaButton = LinkItem & {
  cta: boolean;
};

export type CardSize = "full" | "one-third" | "two-thirds" | undefined;

export type ImageCard = {
  image?: string;
  size?: CardSize;
};

export type FeaturedGridItems = {
  icon?: keyof typeof featureIcons;
  title?: string;
  titleIcon?: keyof typeof titleIcons;
  comingSoon?: boolean;
  url?: string;
  newTab?: boolean;
};

export type PillText = {
  text: string;
  className?: string;
};
