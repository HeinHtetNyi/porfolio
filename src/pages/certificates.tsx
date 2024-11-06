import Layout from "@theme/Layout";
import CertificateCard from "../components/CertificateCard";

export default function Certificates() {
  return (
    <Layout>
      <main
        style={{
          padding: "10px 20px",
          display: "flex",
          // justifyContent: "space-around",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
        <CertificateCard />
      </main>
    </Layout>
  );
}
