import "./styles.css";
import { useState } from "react";

export default function App() {
  const colours = ["yellow", "yellow", "yellow", "yellow"];
  const [selectedIdx, setSelectedIdx] = useState(null);

  function handleChange(idx) {
    setSelectedIdx((prevIdx) => idx);
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "75px",
          justifyContent: "center",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {colours.map((item, idx) => {
          return (
            <div
              key={idx}
              className="box"
              style={{
                backgroundColor: idx == selectedIdx ? "red" : "yellow",
                margin: "10px",
                height: "100px",
                alignItems: "center",
                textAlign: "center",
              }}
              onClick={() => {
                handleChange(idx);
                console.log("clicked");
                {
                  console.log(idx, selectedIdx);
                }
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
