import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import SkillMarquee from "../SkillMarquee";

export default function InfoCard() {
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.row}>
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
            <td>Nationality</td>
            <td>Burma + China</td>
          </tr>
          <tr>
            <td>Work at</td>
            <td>AYA Bank</td>
          </tr>
          <tr>
            <td>Position</td>
            <td>Data Engineer</td>
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
                to="/about-me"
              >
                Learn me!
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
