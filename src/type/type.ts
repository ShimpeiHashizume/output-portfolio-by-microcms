export type pageTitleProps = {
  title: string;
  desc?: string;
};

export type postProps = {
  title: string;
  slug: string;
  publishDate: string;
  categories: Array<string>;
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
