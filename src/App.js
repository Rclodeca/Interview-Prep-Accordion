import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Accordian
        title="Header"
        content="This is an interview with Snorkel AI"
      />
      other content
    </div>
  );
}

const Accordian = ({ title, content }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="accordian-container">
      {title}
      <span onClick={() => setExpanded((e) => !e)} className="accordian-icon">
        {expanded ? "-" : "+"}
      </span>
      <div
        className={`accordian-content ${expanded ? "accordian-expand" : ""}`}
      >
        {content}
      </div>
    </div>
  );
};
