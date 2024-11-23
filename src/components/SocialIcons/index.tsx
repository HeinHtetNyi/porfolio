import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const social_icons = [
  {
    url: "https://www.facebook.com/profile.php?id=61560259407769&mibextid=ZbWKwL",
    icon: "/socials/facebook.png",
    name: "facebook",
  },
  {
    url: "https://www.linkedin.com/in/guruhein/",
    icon: "/socials/linkedin.png",
    name: "linkedin",
  },
  {
    url: "https://github.com/HeinHtetNyi",
    icon: "/socials/github.png",
    name: "github",
  },
];

const study_icons = [
  { url: "", icon: "/socials/tent.png", name: "datacamp" },
  { url: "", icon: "/socials/languages.png", name: "duolingo" },
  { url: "", icon: "/socials/code.png", name: "hackerrank" },
];

const icons = [...study_icons, ...social_icons];

export default function SocialIcons() {
  return (
    <div
      style={{
        maxWidth: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "0 auto",
        gap: 20,
        paddingBottom: 20,
        borderBottom: "1px solid snow",
      }}
    >
      {icons.map((icon, index) => (
        <a
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className={styles.myIcon}
        >
          <img
            src={useBaseUrl(icon.icon)}
            width={30}
            style={{ cursor: "pointer" }}
          />
        </a>
      ))}
    </div>
  );
}
