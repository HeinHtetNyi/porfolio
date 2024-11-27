import { Steps, Panel, Placeholder, ButtonGroup, Button, Text } from "rsuite";
import { useState } from "react";
import RunningRoundIcon from "@rsuite/icons/RunningRound";
import styles from "./styles.module.css";
import "./custom-steps.css";

const exps = [
  {
    company: "AYA Pay",
    position: "Data Engineer",
    date: "Jul 2024 - Present",
    description: [
      "Designed and implemented data pipelines utilizing Apache Airflow and AWS services, including EC2, Lambda, RDS, Step Functions, SAM, and S3, to streamline data processing workflows.",
      "Conducted research and evaluation of ETL tools to identify solutions for specific business challenges.",
      "Managed data migration processes, transferring data from MongoDB to PostgreSQL by writing and optimizing complex NoSQL and SQL queries.",
      "Developed a mobile application using React Native and built APIs with FastAPI to facilitate image data collection for training a facial recognition model.",
    ],
  },
  {
    company: "Datumstruct",
    position: "Software Engineer",
    date: "Feb 2023 - Jun 2024",
    description: [
      "Developed admin and customer dashboards for monitoring logs of IoT devices and robots using React with TypeScript and Spring Boot for API development.",
      "Built mobile applications with React Native and TypeScript to provide seamless user experiences across platforms.",
      "Designed and implemented middleware using Python to integrate APIs with IoT devices, ensuring reliable communication and data exchange.",
      "Conducted testing and evaluation of object detection models using OpenCV to improve computer vision capabilities.",
    ],
  },
  {
    company: "Brillar",
    position: "Test Automation Engineer",
    date: "Oct 2022 - Jan 2023",
    description: [
      "Utilized Tosca, a drag-and-drop automation tool, to perform testing on websites and APIs by simulating user actions and navigation flows.",
      "Identified and reported bugs to the development team, ensuring clear communication of issues for timely resolution.",
      "Managed error tracking and collaborated with developers to ensure that issues were addressed and resolved efficiently.",
    ],
  },
  {
    company: "Teacher Su",
    position: "Backend Developer",
    date: "Aug 2022 - Jan 2023",
    description: [
      "Developed APIs for a student management system using Django, ensuring robust and scalable backend functionality.",
      "Created comprehensive API documentation to support seamless integration and collaboration with frontend developers.",
      "Collaborated with the team to design and implement normalized database schemas, optimizing data organization and integrity.",
    ],
  },
  {
    company: "Juncture",
    position: "Backend Developer",
    date: "Jul 2022 - Jul 2022",
    description: [
      "Developed APIs for a resume scanning application using Django, enabling efficient processing and management of user data.",
    ],
  },
  {
    company: "Thate Pan Institute",
    position: "Python Instructor",
    date: "Aug 2021 - Apr 2022",
    description: [
      "Collaborated with coworkers to design and develop comprehensive lesson outlines for a six-month Python programming course tailored for children aged 14.",
      "Delivered engaging lectures on foundational programming concepts, including basic syntax and Object-Oriented Programming (OOP) principles.",
      "Guided students through progressive learning levels, culminating in building APIs using Flask during the final level of the course.",
    ],
  },
];

export default function WorkExperience() {
  const [step, setStep] = useState(0);
  const pinJob = exps[step];

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
              icon={<RunningRoundIcon style={{ fontSize: 25 }} />}
            />
          ))}
        </Steps>
      </div>
      <hr />
      <div
        style={{
          width: "100%",
          overflowX: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <Panel
          header={`${pinJob["company"]} - ${pinJob["position"]}`}
          style={{
            minWidth: "700px",
          }}
        >
          <Text
            className="primary-text-color"
            weight="semibold"
            style={{ marginBottom: "10px" }}
          >
            {pinJob["date"]}
          </Text>
          <ul>
            {pinJob["description"].map((text, index) => (
              <li>
                <Text
                  className="primary-text-color"
                  size="lg"
                  style={{ marginBottom: "10px" }}
                >
                  {text}
                </Text>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <hr />
    </div>
  );
}
