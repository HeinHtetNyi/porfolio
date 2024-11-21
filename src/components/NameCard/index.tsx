import Heading from "@theme/Heading";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import styles from "./namecard.module.css";

export default function NameCard() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "70%" }}>
          <ul className="tabs">
            <li className="tabs__item tabs__item--active">
              <img src={useBaseUrl("/home/man.png")} width={40} />
            </li>
            <li className="tabs__item">
              <img src={useBaseUrl("/home/girl.png")} width={40} />
            </li>
            <li className="tabs__item">
              <img src={useBaseUrl("/home/skills.png")} width={40} />
            </li>
          </ul>
          <p className={styles.title}>This is Me</p>
        </div>
        <img className={styles.avatar} src={useBaseUrl("/img/me.jpg")} />
      </div>
      <div className={styles.textBox}>
        <p className={styles.text}>
          My name is Hein Zak, and I am driven by a passion for data and a
          commitment to lifelong learning. I am currently working as a data
          engineer, focusing on the critical aspects of data management,
          transformation, and analysis. While I’m deeply involved in the data
          engineering field, my ultimate goal is to become a data scientist and
          data expert. In preparation for my future studies in Taiwan, I am
          actively learning traditional Chinese and English. Outside of my
          professional pursuits, I enjoy playing basketball, which keeps me
          active and grounded. I am excited to bring my enthusiasm for data and
          dedication to learning into every opportunity that comes my way.
        </p>
      </div>
    </div>
  );
}
