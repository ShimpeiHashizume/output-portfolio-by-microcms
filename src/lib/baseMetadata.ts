import { siteMeta } from "./constants";

const { siteTitle, siteDesc, siteUrl, siteLocal, siteType, siteIcon } = siteMeta;

import siteImg from "/ogp.jpg";

export const baseMetadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "./",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
  icons: {
    icon: siteIcon,
    apple: siteIcon,
  },
};

export const openGraphMetadata = {
  title: siteTitle,
  description: siteDesc,
  url: siteUrl,
  // images: [
  //   {
  //     url: siteImg.src,
  //     width: siteImg.width,
  //     height: siteImg.height,
  //   },
  // ],
  local: siteLocal,
  type: siteType,
};

export const twitterMetadata = {
  card: "summary_large_image",
  title: siteTitle,
  description: siteDesc,
  // images: [siteImg.src],
};
