import clsx from "clsx";
import Link from "@docusaurus/Link";
import SkillMarquee from "../SkillMarquee";
import { Text } from "rsuite";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function InfoCard() {
  return (
    <div className={styles.container}>
      <table className={styles.infoTable}>
        <tbody>
          <tr>
            <td colSpan={2} className={styles.firstRow}>
              <span>Hein Htet Nyi</span>
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>+959 421050178</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>heinhtetnyi.ucsy@gmail.com</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>Yangon, Myanmar</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>Burma + China</td>
          </tr>
          <tr>
            <td>Work at</td>
            <td>
              <Text weight="bold" className="primary-text-color">
                AYA Bank
              </Text>
            </td>
          </tr>
          <tr>
            <td>Position</td>
            <td>
              <Text weight="bold" className="primary-text-color">
                Data Engineer
              </Text>
            </td>
          </tr>
          <tr>
            <td>Language</td>
            <td>Burmese, English, Chinese</td>
          </tr>
          <tr>
            <td colSpan={2} className={styles.skillRow}>
              <SkillMarquee />
            </td>
          </tr>
          <tr className={styles.lastRow}>
            <td colSpan={2}>
              <Link
                className={clsx("button button--lg", styles.learnMeButton)}
                to="/certificates"
              >
                <span>Learn me</span>
                <img
                  src={useBaseUrl("/home/leaf.png")}
                  width={25}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
