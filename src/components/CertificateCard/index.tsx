import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { Text } from "rsuite";
import "./styles.css";

function CertificateCard({
  imageUrl,
  title,
  link,
}: {
  imageUrl: string;
  title: string;
  link?: string;
}) {
  return (
    <div className="card-demo">
      <div className="card">
        <div className="card__image">
          <img
            src={useBaseUrl(imageUrl)}
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div className="card__body">
          <Text size={"xl"} weight="medium" className="primary-text-color">
            {title || "I don't know"}
          </Text>
        </div>
        <div className="card__footer">
          {link && (
            <Link className="button view-button" to={link}>
              View
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
