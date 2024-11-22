import CertificateCard from "../../components/CertificateCard";
import styles from "./datacamp-certificates.module.css";
import { Text } from "rsuite";

const certificates = [
  {
    title: "Data Engineer Associate",
    url: "certificates/de_associate.png",
    link: "https://www.datacamp.com/certificate/DEA0018324454440",
  },
];

export default function DataCampCertificates() {
  return (
    <div
      style={{
        padding: "10px 20px",
      }}
    >
      <Text size="2rem" weight="bold" className="primary-text-color">
        DataCamp
      </Text>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: 30,
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            imageUrl={certificate.url}
            title={certificate.title}
            link={certificate.link}
          />
        ))}
      </div>
    </div>
  );
}
