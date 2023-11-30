import React from "react";
import PageTitle from "@/component/PageTitle/PageTitle";
import styles from "./page.module.css";
import Image from "next/image";
import SkillItem from "@/component/SkillItem/SkillItem";
import { skillProps } from "@/type/type";
import eyecatch from "/src/images/about.jpg";

import { siteMeta } from "@/lib/constants";
const { siteTitle, siteUrl } = siteMeta;

import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";

const programmingLanguage: skillProps[] = [
  {
    id: 1,
    name: "HTML",
    years: 3,
  },
  {
    id: 2,
    name: "CSS",
    years: 3,
  },
  {
    id: 3,
    name: "JavaScript",
    years: 3,
  },
];

const framework: skillProps[] = [
  {
    id: 1,
    name: "React",
    years: 1,
  },
  {
    id: 2,
    name: "Next.js",
    years: 1,
  },
];

const designTools: skillProps[] = [
  {
    id: 1,
    name: "XD",
    years: 3,
  },
];

const otherTools: skillProps[] = [
  {
    id: 1,
    name: "Github",
    years: 2,
  },
  {
    id: 2,
    name: "Gitlab",
    years: 2,
  },
  {
    id: 3,
    name: "Backlog",
    years: 3,
  },
];

const About = () => {
  return (
    <div className="mainBlock">
      <PageTitle title="About" desc="プロフィール" />
      <section className={styles.profile}>
        <div className={styles.profileImgContainer}>
          <Image src="/undraw_code_review_re_woeb.svg" alt="" fill={true} />
        </div>
        <div className={styles.profileContentsContainer}>
          <h2 className={styles.title}>自己紹介</h2>
          <p className={styles.profileDesc}>
            大学卒業後、LPガス会社で3年ほど勤務。営業や工事、保安業務など幅広く担当。
            <br />
            現在はWeb制作会社でフロントエンドエンジニアとして勤務。主にHTML/CSS/JavaScriptを使用して3年間で約60～70ほどの案件を担当。通常のWebサイトだけではなく、ECサイトやLPなども経験あり。
            <br />
            個人的にReactやNext.jsを勉強中。
          </p>
        </div>
      </section>
      <section className={styles.skill}>
        <h2 className={styles.title}>スキル</h2>
        <div className={styles.skillWrap}>
          <SkillItem subTitle="言語" skillInfo={programmingLanguage} />
          <SkillItem subTitle="フレームワーク" skillInfo={framework} />
          <SkillItem subTitle="デザインツール" skillInfo={designTools} />
          <SkillItem subTitle="その他ツール" skillInfo={otherTools} />
        </div>
      </section>
    </div>
  );
};

const pageTitle = "About";
const pageDesc = "Shimpei Hashizumeの詳しいプロフィールになります";
const ogpTitle = `${pageTitle} | ${siteTitle}`;
const ogpUrl = new URL("/about", siteUrl).toString();

export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
    images: [
      {
        url: eyecatch.src,
        width: eyecatch.width,
        height: eyecatch.height,
      },
    ],
  },
  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  },
};

export default About;
