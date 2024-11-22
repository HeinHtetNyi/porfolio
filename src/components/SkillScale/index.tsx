import { Progress } from "rsuite";
import { Text } from "rsuite";
import styles from "./styles.module.css";

const skills = [
  { name: "Python", scale: 100 },
  { name: "SQL", scale: 90 },
  { name: "Java", scale: 80 },
  { name: "Typescript", scale: 80 },
  { name: "API", scale: 80 },
  { name: "AWS", scale: 50 },
];

export default function SkillScale() {
  return (
    <div className={styles.container}>
      <Text
        size="1.5rem"
        weight="bold"
        className="primary-text-color"
        style={{ marginBottom: 20 }}
      >
        Skill
      </Text>
      {skills.map((skill) => (
        <div style={{ display: "flex", alignItems: "center" }} key={skill.name}>
          <Text weight="medium" size="xl" style={{ color: "white" }}>
            {skill.name}
          </Text>
          <Progress.Line percent={skill.scale} status="active" />
        </div>
      ))}
    </div>
  );
}
