import React from "react";
import PageTitle from "@/component/PageTitle/PageTitle";
import styles from "./page.module.css";
import Image from "next/image";
import SkillItem from "@/component/SkillItem/SkillItem";
import eyecatch from "/src/images/about.jpg";

import { siteMeta } from "@/lib/constants";
const { siteTitle, siteUrl } = siteMeta;

import { openGraphMetadata, twitterMetadata } from "@/lib/baseMetadata";
import { designTools, framework, otherTools, programmingLanguage } from "@/constants/SkillData";

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
            その後、Web制作会社でフロントエンドエンジニアとして勤務。主にHTML/CSS/JavaScriptを使用して3年間で約60～70ほどの案件を担当。通常のWebサイトだけではなく、ECサイトやLPなども経験あり。
            <br />
            現在はシステム開発会社のフロントエンドエンジニアとして勤務。ReactやTypeScriptを使用したWebアプリケーションの開発を担当。
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
