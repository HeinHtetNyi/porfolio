import { Grid, Row, Col } from "rsuite";
import NameCard from "../components/NameCard";
import SocialIcons from "../components/SocialIcons";
import LiveClock from "../components/LiveClocks";
import InfoCard from "../components/InfoCard";
import SkillScale from "../components/SkillScale";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import styles from "./index.module.css";
import ResumeDownload from "../components/ResumeDownload";
import CVLetterDownload from "../components/CVLetterDownload";

export default function Home(): JSX.Element {
  return (
    <main
      style={{
        backgroundColor: "#222831",
        width: "100%",
        minHeight: "100vh",
        padding: "20px 0",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "0 20px",
        }}
      >
        <LiveClock />
        <SocialIcons />
      </div>
      <Grid fluid={true} className={styles.responsiveGrid}>
        <Row>
          <Col lg={8} md={24} xs={24} sm={24}>
            <InfoCard />
          </Col>
          <Col lg={16} md={24} xs={24} sm={24}>
            <NameCard />
          </Col>
        </Row>
        <Row>
          <Col lg={16} md={15} xs={24} sm={24}>
            <SkillScale />
          </Col>
          <Col lg={8} md={9} xs={24} sm={24}>
            <Education />
            <ResumeDownload />
            <CVLetterDownload />
          </Col>
        </Row>
        <Row>
          <Col lg={24} md={24} xs={24} sm={24}>
            <WorkExperience />
          </Col>
        </Row>
      </Grid>
    </main>
  );
}
