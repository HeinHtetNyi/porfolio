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
    <div
      style={{
        padding: "10px 20px",
      }}
    >
      <Text size="2rem" weight="bold" className="primary-text-color">
        Amazon Web Service
      </Text>
      <div
        style={{
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
          />
        ))}
      </div>
    </div>
  );
}
