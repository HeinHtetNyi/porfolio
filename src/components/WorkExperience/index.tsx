import { Steps, Panel, Placeholder, ButtonGroup, Button, Text } from "rsuite";
import { useState } from "react";
import styles from "./styles.module.css";
import "./custom-steps.css";

const exps = [
  { company: "Thate Pan Institute", position: "Python Instructor" },
  { company: "Juncture", position: "Backend Developer" },
  { company: "Teacher Su", position: "Backend Developer" },
  { company: "Brillar", position: "Test Automation Engineer" },
  { company: "Datumstruct", position: "Software Engineer" },
  { company: "AYA Pay", position: "Data Engineer" },
];

export default function WorkExperience() {
  const [step, setStep] = useState(0);

  const onClickStep = (step: number) => setStep(step);

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <Text
          size="1.5rem"
          weight="bold"
          className="primary-text-color"
          style={{ marginBottom: 20 }}
        >
          Work Experience
        </Text>
      </div>
      <div
        style={{
          width: "100%",
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Steps current={step} style={{ width: "1500px" }}>
          {exps.map((exp, index) => (
            <Steps.Item
              key={index}
              title={exp.company}
              description={exp.position}
              onClick={() => onClickStep(index)}
            />
          ))}
        </Steps>
      </div>
      <hr />
      <Panel header={`Job: ${step + 1}`}>
        <Placeholder.Paragraph />
      </Panel>
      <hr />
    </div>
  );
}
