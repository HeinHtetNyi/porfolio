import { TypeAnimation } from "react-type-animation";
import styles from "./styles.module.css";

export default function HomeTypingText() {
  return (
    <div
      style={{ margin: "10px auto", textAlign: "center", maxWidth: "1200px" }}
    >
      <TypeAnimation
        sequence={[
          "Data is the essence of discovery, a raw and unfiltered stream of information waiting to be shaped into meaningful insights.",
          3000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        speed={10}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className={styles.text}
      />
    </div>
  );
}
