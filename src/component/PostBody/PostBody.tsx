import React, { FC } from "react";
import styles from "./PostBody.module.css";

type Props = {
  children: React.ReactNode;
};

const PostBody: FC<Props> = ({ children }) => {
  return <div className={styles.stack}>{children}</div>;
};

export default PostBody;
