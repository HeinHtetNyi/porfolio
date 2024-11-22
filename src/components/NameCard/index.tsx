import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./namecard.module.css";
import { Highlight } from "rsuite";
import { useState } from "react";

export default function NameCard() {
  const [currentTab, setCurrentTab] = useState(1);

  const handleClickTab = (tab: number) => {
    setCurrentTab(tab);
  };

  const activeTab = (tab: number) => {
    if (currentTab === tab) {
      return "tabs__item tabs__item--active";
    } else {
      return "tabs__item";
    }
  };

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
            <li className={activeTab(1)} onClick={() => handleClickTab(1)}>
              <img src={useBaseUrl("/home/man.png")} width={40} />
            </li>
            <li className={activeTab(2)} onClick={() => handleClickTab(2)}>
              <img src={useBaseUrl("/home/girl.png")} width={40} />
            </li>
          </ul>
          {currentTab === 1 ? (
            <p className={styles.title}>This is Me</p>
          ) : (
            <p className={styles.title}>This is Mine</p>
          )}
        </div>
        {currentTab === 1 ? (
          <img className={styles.avatar} src={useBaseUrl("/img/me.jpg")} />
        ) : (
          <img className={styles.avatar} src={useBaseUrl("/img/sy3.jpg")} />
        )}
      </div>
      <div className={styles.textBox}>
        {currentTab === 1 ? (
          <p className={styles.text}>
            <Highlight query={["Hein Zak"]}>
              My name is Hein Zak, and I am driven by a passion for data and a
              commitment to lifelong learning. I am currently working as a data
              engineer, focusing on the critical aspects of data management,
              transformation, and analysis. While I’m deeply involved in the
              data engineering field, my ultimate goal is to become a data
              scientist and data expert. In preparation for my future studies in
              Taiwan, I am actively learning traditional Chinese and English.
              Outside of my professional pursuits, I enjoy playing basketball,
              which keeps me active and grounded. I am excited to bring my
              enthusiasm for data and dedication to learning into every
              opportunity that comes my way.
            </Highlight>
          </p>
        ) : (
          <p className={styles.text}>
            <Highlight query={["Saw Yu Nandar"]}>
              Her name is Saw Yu Nandar, the love of my life and my greatest
              blessing. We've been together for over five wonderful years, with
              countless more to come. She's a perfect blend of fiery passion and
              irresistible charm, her occasional stubbornness only adding to her
              unique allure. A master of planning and organization, she amazes
              me with her brilliance, even if her playful laziness sneaks in now
              and then. She’s currently studying Japanese to pursue her dreams
              in Japan, and I couldn’t be prouder of her determination. When
              she’s by my side, her care and love wrap around me like a warm
              embrace, making the world feel complete. I can't imagine a life
              without her—she's my heart, my home, and my forever.
            </Highlight>
          </p>
        )}
      </div>
    </div>
  );
}
