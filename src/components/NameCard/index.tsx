import Heading from "@theme/Heading";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import styles from "./namecard.module.css";

export default function NameCard() {
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
            style={{
              marginBottom: 0,
              fontSize: "clamp(1.5rem, 4vw + 1rem, 3rem)",
            }}
          >
            Hein Zak
          </Heading>
          <img src={useBaseUrl("/img/myanmar.png")} width={40} />
        </div>
        <p
          className="hero__subtitle secondary-text-color"
          style={{
            fontSize: "clamp(1rem, 2vw + 0.5rem, 1.5rem)",
          }}
        >
          Data Engineer at <b>AYAPay</b>
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.learnMeButton)}
            to="/about-me"
          >
            Learn me!
          </Link>
        </div>
      </div>
    </div>
  );
}
