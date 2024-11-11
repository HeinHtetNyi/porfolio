import useBaseUrl from "@docusaurus/useBaseUrl";

export default function SocialIcons() {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        justifyContent: "flex-end",
      }}
    >
      <a
        href="https://www.facebook.com/profile.php?id=61560259407769&mibextid=ZbWKwL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={useBaseUrl("/socials/facebook.png")}
          width={25}
          style={{ cursor: "pointer" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/guruhein/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={useBaseUrl("/socials/linkedin.png")}
          width={25}
          style={{ cursor: "pointer" }}
        />
      </a>
      <a
        href="https://github.com/HeinHtetNyi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={useBaseUrl("/socials/github.png")}
          width={25}
          style={{ cursor: "pointer" }}
        />
      </a>
    </div>
  );
}
