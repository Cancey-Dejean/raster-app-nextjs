export type LinkItem = {
  label: string;
  url: string;
  newTab?: boolean;
};

export type CtaButton = LinkItem & {
  cta: boolean;
};

export type CardSize = "full" | "one-third" | "two-thirds" | undefined;

export type ImageCard = {
  image?: string;
  size?: CardSize;
};
