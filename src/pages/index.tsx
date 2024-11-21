import NameCard from "../components/NameCard";
import HomeFooter from "../components/HomeFooter";
import SocialIcons from "../components/SocialIcons";
import LiveClock from "../components/LiveClocks";
import HomeTypingText from "../components/HomeTypingText";
import InfoCard from "../components/InfoCard";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <main
      style={{
        backgroundColor: "#222831",
        width: "100%",
        minHeight: "100vh",
        padding: "20px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <LiveClock />
        <SocialIcons />
      </div>
      <HomeTypingText />
      <div className={styles.responsiveGrid}>
        <div style={{ marginLeft: "auto" }}>
          <InfoCard />
        </div>
        <div>
          <NameCard />
        </div>
      </div>
      {/* <SkillMarquee /> */}
      {/* <HomeFooter /> */}
    </main>
  );
}
