import { Text, Timeline } from "rsuite";
import styles from "./styles.module.css";

export default function Education() {
  return (
    <div className={styles.container}>
      <Text
        size="1.5rem"
        weight="bold"
        className="primary-text-color"
        style={{ marginBottom: 20 }}
      >
        Education
      </Text>
      <Timeline align="left">
        <Timeline.Item>
          <p>2018-2020</p>
          <p>University of Computer Studies, Yangon</p>
          <p>Computer Science</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>2023-2024</p>
          <p>Parami University</p>
          <p>Data Science</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
