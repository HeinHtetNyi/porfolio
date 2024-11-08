import Layout from "@theme/Layout";
import AWSCertificates from "../components/AWSCertificates";
import DataCampCertificates from "../components/DataCampCertificates";
import HackerRankCertificates from "../components/HackerRankCertificates";

export default function Certificates() {
  return (
    <Layout>
      <AWSCertificates />
      <DataCampCertificates />
      <HackerRankCertificates />
    </Layout>
  );
}
