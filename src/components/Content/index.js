import React from "react";

import styles from "./index.module.scss";

const Content = ({ paragraphs }) => {
  if (!paragraphs) {
    return null;
  }

  const content = paragraphs.map((paragraph) => (
    <div>
      <h1 className={styles.shortText}>{paragraph.fields.short_text}</h1>
      <h5 className={styles.longText}>{paragraph.fields.long_text}</h5>
    </div>
  ));

  return <div className={styles.content}>{content}</div>;
};
export default Content;
