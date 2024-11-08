import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Marquee from "react-fast-marquee";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { TypeAnimation } from "react-type-animation";

function NameCard() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("hero hero--secondary", styles.nameCard)}>
      <div className="container">
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src={useBaseUrl("/img/me.jpg")}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Heading
            as="h1"
            className="hero__title secondary-text-color"
            style={{ marginBottom: 0 }}
          >
            Hein Zak
          </Heading>
          <img src={useBaseUrl("/img/myanmar.png")} width={40} />
        </div>
        <p className="hero__subtitle secondary-text-color">
          Data Engineer at <b>AYAPay</b>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/about-me"
            style={{
              backgroundColor: "#31363F",
              color: "#EEEEEE",
            }}
          >
            Learn me!
          </Link>
        </div>
      </div>
    </div>
  );
}

function SkillMarquee() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Marquee autoFill={true} delay={1} speed={100} pauseOnHover={true}>
        <img
          src={useBaseUrl("/skills/python.png")}
          width={80}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/java.png")}
          width={80}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/java-script.png")}
          width={80}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/typescript.png")}
          width={80}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/sql.png")}
          width={80}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <img
          src={useBaseUrl("/skills/web.png")}
          width={80}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
      </Marquee>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <main
      style={{
        backgroundColor: "#222831",
        width: "100%",
        height: "100vh",
      }}
    >
      <NameCard />
      <div style={{ textAlign: "center" }}>
        <TypeAnimation
          sequence={[
            "Everything I do is for Saw Yu ❤️", // Types 'One'
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          style={{
            fontSize: "2em",
          }}
        />
      </div>
      <SkillMarquee />
    </main>
  );
}
