import { TypeAnimation } from "react-type-animation";
import NameCard from "../components/NameCard";
import SkillMarquee from "../components/SkillMarquee";
import HomeFooter from "../components/HomeFooter";
import SocialIcons from "../components/SocialIcons";
import LiveClock from "../components/LiveClocks";

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
      <NameCard />
      <div style={{ textAlign: "center" }}>
        <TypeAnimation
          sequence={[
            "Everything I do is for Saw Yu ❤️",
            1000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          style={{
            fontSize: "clamp(1rem, 2vw + 1rem, 2rem)",
          }}
        />
      </div>
      <SkillMarquee />
      <HomeFooter />
    </main>
  );
}
