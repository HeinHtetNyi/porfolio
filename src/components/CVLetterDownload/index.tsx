import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

export default function CVLetterDownload() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("/pdf/cover_letter.txt").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Hein Htet Nyi - Cover Letter.txt";
        alink.click();
      });
    });
  };

  return (
    <div>
      <button className={styles.downloadButton} onClick={onButtonClick}>
        Download Cover Letter
        <img
          src={useBaseUrl("/home/cover-letter.png")}
          width={40}
          style={{ margin: "0 10px" }}
        />
      </button>
    </div>
  );
}
