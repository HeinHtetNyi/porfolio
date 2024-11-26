import { Tabs } from "rsuite";
import MyLayout from "./MyLayout";
import "./projects.css";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <MyLayout>
      <div
        style={{
          padding: "0 10%",
        }}
      >
        <Tabs
          defaultActiveKey="1"
          style={{
            textAlign: "center",
          }}
        >
          <Tabs.Tab eventKey="1" title="Data">
            <div className="tab-container">
              {[1, 2, 3].map((num) => (
                <ProjectCard key={num} />
              ))}
            </div>
          </Tabs.Tab>
          <Tabs.Tab eventKey="2" title="AI/ML">
            <div className="tab-container">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <ProjectCard key={num} />
              ))}
            </div>
          </Tabs.Tab>
          <Tabs.Tab eventKey="3" title="API">
            <div className="tab-container">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <ProjectCard key={num} />
              ))}
            </div>
          </Tabs.Tab>
          <Tabs.Tab eventKey="4" title="Mobile">
            <div className="tab-container">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <ProjectCard key={num} />
              ))}
            </div>
          </Tabs.Tab>
        </Tabs>
      </div>
    </MyLayout>
  );
}
