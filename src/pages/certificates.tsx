import { Tabs } from "rsuite";
import AWSCertificates from "../components/AWSCertificates";
import DataCampCertificates from "../components/DataCampCertificates";
import HackerRankCertificates from "../components/HackerRankCertificates";
import MyLayout from "./MyLayout";

export default function Certificates() {
  return (
    <MyLayout>
      <div
        style={{
          padding: "0 10%",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          style={{
            textAlign: "center",
          }}
        >
          <Tabs.Tab eventKey="1" title="AWS">
            <AWSCertificates />
          </Tabs.Tab>
          <Tabs.Tab eventKey="2" title="DataCamp">
            <DataCampCertificates />
          </Tabs.Tab>
          <Tabs.Tab eventKey="3" title="HackerRank">
            <HackerRankCertificates />
          </Tabs.Tab>
        </Tabs>
      </div>
    </MyLayout>
  );
}
