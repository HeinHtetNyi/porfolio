import useBaseUrl from "@docusaurus/useBaseUrl";

export default function HomeFooter() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "100px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={useBaseUrl("/home/buddha.png")}
          width={50}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <p
          style={{
            marginBottom: 0,
            fontSize: "clamp(1rem, 2vw + 0.5rem, 1.5rem)",
            color: "white",
          }}
        >
          ဘုရား
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={useBaseUrl("/home/buddhism.png")}
          width={50}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <p
          style={{
            marginBottom: 0,
            fontSize: "clamp(1rem, 2vw + 0.5rem, 1.5rem)",
            color: "white",
          }}
        >
          တရား
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={useBaseUrl("/home/thai-monk.png")}
          width={50}
          style={{ marginRight: 20, marginLeft: 20 }}
        />
        <p
          style={{
            marginBottom: 0,
            fontSize: "clamp(1rem, 2vw + 0.5rem, 1.5rem)",
            color: "white",
          }}
        >
          သံဃာ
        </p>
      </div>
    </div>
  );
}
