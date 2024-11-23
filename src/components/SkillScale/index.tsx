import { Progress } from "rsuite";
import { Text } from "rsuite";
import styles from "./styles.module.css";
import { Grid, Row, Col } from "rsuite";

const skills = [
  { name: "Python", scale: 100 },
  { name: "SQL", scale: 90 },
  { name: "NoSQL", scale: 80 },
  { name: "Java", scale: 80 },
  { name: "TypeScript", scale: 80 },
  { name: "API", scale: 80 },
  { name: "Docker", scale: 70 },
  { name: "AWS", scale: 50 },
  { name: "Big Data", scale: 50 },
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
      <div style={{ overflowX: "scroll", scrollbarWidth: "none" }}>
        {skills.map((skill) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "600px",
            }}
            key={skill.name}
          >
            <Grid fluid={true} style={{ width: "100%" }}>
              <Row>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Text weight="medium" size="lg" style={{ color: "white" }}>
                    {skill.name}
                  </Text>
                </Col>
                <Col lg={20} md={20} sm={20} xs={20}>
                  <Progress.Line percent={skill.scale} status="active" />
                </Col>
              </Row>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
}
