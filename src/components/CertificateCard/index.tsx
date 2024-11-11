import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

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
      <div className="card">
        <div className="card__image">
          <img
            src={useBaseUrl(imageUrl)}
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div className="card__body">
          <h4>{title || "I don't know"}</h4>
          {/* <small>
            The Quaco Head Lighthouse is a well maintained lighthouse close to
            St. Martins. It is a short, beautiful walk to the lighthouse along
            the seashore.
          </small> */}
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
