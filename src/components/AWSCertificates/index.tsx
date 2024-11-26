import CertificateCard from "../../components/CertificateCard";
import styles from "./aws-certificates.module.css";
import { Text } from "rsuite";

const certificates = [
  {
    title: "AWS Cloud Practitioner Essential",
    url: "certificates/aws_cloud_practitioner_essential.png",
  },
  { title: "AWS Job Roles", url: "certificates/aws_job_roles.png" },
];

export default function AWSCertificates() {
  return (
    <div className={styles.container}>
      {certificates.map((certificate, index) => (
        <CertificateCard
          key={index}
          imageUrl={certificate.url}
          title={certificate.title}
        />
      ))}
    </div>
  );
}
