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
    <div className={styles.container}>
      {certificates.map((certificate, index) => (
        <CertificateCard
          key={index}
          imageUrl={certificate.url}
          title={certificate.title}
          link={certificate.link}
        />
      ))}
    </div>
  );
}
