import PageTitle from "@/component/PageTitle/PageTitle";
import React from "react";

const NotFound = () => {
  return (
    <div className="mainBlock">
      <PageTitle title="404 not found" desc="ページが見つかりません" />
      <p className="text404">
        おっと、こちらのページは見つかりませんでした。
        <br />
        お手数ですがURLをご確認の上、再度お試しください。
      </p>
    </div>
  );
};

export default NotFound;
