import useBaseUrl from "@docusaurus/useBaseUrl";
import { Grid, Row, Col } from "rsuite";
import { Highlight } from "rsuite";
import { useState } from "react";
import styles from "./namecard.module.css";

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
      <Grid style={{ width: "100%" }}>
        <Row>
          <Col lg={16} md={12} xs={12} sm={12}>
            <div>
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
          </Col>
          <Col lg={8} md={12} xs={12} sm={12} style={{ textAlign: "right" }}>
            {currentTab === 1 ? (
              <img className={styles.avatar} src={useBaseUrl("/img/me3.jpg")} />
            ) : (
              <img className={styles.avatar} src={useBaseUrl("/img/sy5.jpg")} />
            )}
          </Col>
        </Row>
      </Grid>
      <div className={styles.textBox}>
        {currentTab === 1 ? (
          <Highlight query={["Hein Zak"]} className={styles.text}>
            My name is Hein Zak, and I am driven by a passion for data and a
            commitment to lifelong learning. I am currently working as a data
            engineer, focusing on the critical aspects of data management,
            transformation, and analysis. While I’m deeply involved in the data
            engineering field, my ultimate goal is to become a data scientist
            and data expert. In preparation for my future studies in Taiwan, I
            am actively learning traditional Chinese and English. Outside of my
            professional pursuits, I enjoy playing basketball, which keeps me
            active and grounded. I am excited to bring my enthusiasm for data
            and dedication to learning into every opportunity that comes my way.
          </Highlight>
        ) : (
          <Highlight query={["Saw Yu"]} className={styles.text}>
            Her name is Saw Yu , the love of my life and my greatest blessing.
            We've been together for over five wonderful years, with countless
            more to come. She's a perfect blend of fiery passion and
            irresistible charm, her occasional stubbornness only adding to her
            unique allure. A master of planning and organization, she amazes me
            with her brilliance, even if her playful laziness sneaks in now and
            then. When she’s by my side, her care and love wrap around me like a
            warm embrace, making the world feel complete. I can't imagine a life
            without her—she's my heart, my home, and my forever.
          </Highlight>
        )}
      </div>
    </div>
  );
}
