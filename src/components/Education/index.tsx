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
          <Text weight="bold" className="primary-text-color">
            University of Computer Studies, Yangon
          </Text>
          <Text weight="medium" className="primary-text-color">
            Computer Science
          </Text>
        </Timeline.Item>
        <Timeline.Item>
          <p>2023-2024</p>
          <Text weight="bold" className="primary-text-color">
            Parami University
          </Text>
          <Text weight="medium" className="primary-text-color">
            Data Science
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
