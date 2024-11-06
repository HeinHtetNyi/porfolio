import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Marquee from "react-fast-marquee";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("hero hero--secondary", styles.heroBanner)}>
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
          <Heading as="h1" className="hero__title" style={{ marginBottom: 0 }}>
            Hein Zak
          </Heading>
          <img src={useBaseUrl("/img/myanmar.png")} width={40} />
        </div>
        <p className="hero__subtitle">Data Engineer at AYAPay</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/about-me"
            style={{
              backgroundColor: "#EEEEEE",
              color: "#222831",
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
      <Marquee autoFill={true} delay={1} speed={100}>
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
      <HomepageHeader />
      <SkillMarquee />
    </main>
  );
}
