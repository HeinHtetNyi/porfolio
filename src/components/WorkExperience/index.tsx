import { Steps, Panel, Placeholder, ButtonGroup, Button, Text } from "rsuite";
import { useState } from "react";
import styles from "./styles.module.css";
import "./custom-steps.css";

export default function WorkExperience() {
  const [step, setStep] = useState(0);
  const onChange = (nextStep: number) => {
    setStep(nextStep < 0 ? 0 : nextStep > 5 ? 5 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
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
        <ButtonGroup>
          <Button onClick={onPrevious} disabled={step === 0}>
            Previous
          </Button>
          <Button onClick={onNext} disabled={step === 5}>
            Next
          </Button>
        </ButtonGroup>
      </div>
      <div
        style={{
          width: "100%",
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Steps current={step} style={{ width: "1500px" }}>
          <Steps.Item
            title="Thate Pan Institute"
            description="Python Instructor"
          />
          <Steps.Item title="Juncture" description="Backend Developer" />
          <Steps.Item title="Teacher Su" description="Backend Developer" />
          <Steps.Item title="Brillar" description="Test Automation Engineer" />
          <Steps.Item title="Datumstruct" description="Software Engineer" />
          <Steps.Item title="AYA Pay" description="Data Engineer" />
        </Steps>
      </div>
      <hr />
      <Panel header={`Step: ${step + 1}`}>
        <Placeholder.Paragraph />
      </Panel>
      <hr />
    </div>
  );
}
