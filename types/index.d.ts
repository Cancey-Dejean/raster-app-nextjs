export type LinkItem = {
  label: string;
  url: string;
  newTab?: boolean;
};

export type CtaButton = LinkItem & {
  cta: boolean;
};
