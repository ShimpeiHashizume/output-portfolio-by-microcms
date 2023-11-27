export type pageTitleProps = {
  title: string;
  desc?: string;
};

export type postProps = {
  title: string;
  slug: string;
  publishDate: string;
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
};

export type categoriesProps = {
  name: string;
  id: string;
  slug: string;
};

export type skillProps = {
  subTitle?: string;
  id: number;
  name: string;
  years: number;
};

export type ConvertBodyProps = {
  contentHTML: string;
};

export type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};
