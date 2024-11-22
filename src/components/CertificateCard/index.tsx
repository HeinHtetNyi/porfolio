import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { Text } from "rsuite";

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
    <div className="card-demo" style={{ width: "250px", margin: "10px 0" }}>
      <div className="card" style={{ border: "1px solid snow" }}>
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
            <Link className="button button--primary button--block" to={link}>
              View
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
