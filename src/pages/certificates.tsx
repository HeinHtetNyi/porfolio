import Layout from "@theme/Layout";
import AWSCertificates from "../components/AWSCertificates";
import DataCampCertificates from "../components/DataCampCertificates";
import HackerRankCertificates from "../components/HackerRankCertificates";
import MyLayout from "./MyLayout";

export default function Certificates() {
  return (
    <MyLayout>
      <AWSCertificates />
      <DataCampCertificates />
      <HackerRankCertificates />
    </MyLayout>
  );
}
