import React from "react";
import PageTitle from "@/component/PageTitle/PageTitle";
import styles from "./page.module.css";
import Image from "next/image";

const programmingLanguage = [
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

const framework = [
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

const designTools = [
  {
    id: 1,
    name: "XD",
    years: 3,
  },
];

const otherTools = [
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
      <PageTitle title="About" desc="プロフィールページ" />
      <section className={styles.profile}>
        <div className={styles.profileImgContainer}>
          <Image src="/undraw_code_review_re_woeb.svg" alt="" fill={true} />
        </div>
        <div className={styles.profileContentsContainer}>
          <h2 className={styles.title}>自己紹介</h2>
          <p className={styles.profileDesc}>
            大学卒業後、LPガス会社で3年ほど勤務。営業や工事、保安業務など幅広く担当。
            <br />
            現在はWeb制作会社でフロントエンドエンジニアとして勤務。主にHTML/CSS/JavaScriptを使用して3年間で約70～80ほどの案件を担当。通常のWebサイトだけではなく、ECサイトやLPなども経験あり。
            <br />
            個人的にReactやNext.jsを勉強中。
          </p>
        </div>
      </section>
      <section className={styles.skill}>
        <h2 className={styles.title}>スキル</h2>
        <div className={styles.skillWrap}>
          <div className={styles.skillBox}>
            <h3 className={styles.subTitle}>言語</h3>
            <ul className={styles.skillList}>
              {programmingLanguage.map((item) => (
                <li key={item.id} className={styles.skillItem}>
                  <span className={styles.skillTitle}>{item.name}</span>
                  <span className={styles.skillYears}>{item.years}年</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.subTitle}>フレームワーク</h3>
            <ul className={styles.skillList}>
              {framework.map((item) => (
                <li key={item.id} className={styles.skillItem}>
                  <span className={styles.skillTitle}>{item.name}</span>
                  <span className={styles.skillYears}>{item.years}年</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.subTitle}>デザインツール</h3>
            <ul className={styles.skillList}>
              {designTools.map((item) => (
                <li key={item.id} className={styles.skillItem}>
                  <span className={styles.skillTitle}>{item.name}</span>
                  <span className={styles.skillYears}>{item.years}年</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.subTitle}>その他ツール</h3>
            <ul className={styles.skillList}>
              {otherTools.map((item) => (
                <li key={item.id} className={styles.skillItem}>
                  <span className={styles.skillTitle}>{item.name}</span>
                  <span className={styles.skillYears}>{item.years}年</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
