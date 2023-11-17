import React from "react";
import styles from "./SkillItem.module.css";
import { skillProps } from "@/type/type";

interface skillItemProps {
  skillInfo: skillProps[];
}

const SkillItem: React.FC<skillItemProps> = ({ skillInfo }) => {
  return (
    <div className={styles.skillBox}>
      <h3 className={styles.subTitle}>言語</h3>
      <ul className={styles.skillList}>
        {skillInfo.map((item) => (
          <li key={item.id} className={styles.skillItem}>
            <span className={styles.skillTitle}>{item.name}</span>
            <span className={styles.skillYears}>{item.years}年</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillItem;
