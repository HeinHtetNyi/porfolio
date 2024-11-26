import CertificateCard from "../../components/CertificateCard";
import styles from "./hackerrank-certificates.module.css";

const certificates = [
  {
    title: "Python Basic",
    url: "certificates/python_basic.png",
    link: "https://www.hackerrank.com/certificates/iframe/171c175e6412",
  },
  {
    title: "SQL Basic",
    url: "certificates/sql_basic.png",
    link: "https://www.hackerrank.com/certificates/iframe/c1c4196745ed",
  },
  {
    title: "SQL Intermediate",
    url: "certificates/sql_intermediate.png",
    link: "https://www.hackerrank.com/certificates/iframe/69b7c2f54499",
  },
  {
    title: "SQL Advanced",
    url: "certificates/sql_advanced.png",
    link: "https://www.hackerrank.com/certificates/iframe/827d2ac6148c",
  },
];

export default function HackerRankCertificates() {
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
