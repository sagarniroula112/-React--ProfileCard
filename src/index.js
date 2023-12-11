import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <>
      <Container />
    </>
  );
}

function Container() {
  return (
    <div className="container">
      <Avatar />
      <Name />
      <Description />
      <Hire />
      <Skillset />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="Spongebob.png" alt="sagar"></img>
    </div>
  );
}

function Name() {
  return (
    <>
      <h1>Spongebob Pants</h1>
      <h4>Web Developer</h4>
    </>
  );
}

function Description() {
  return (
    <>
      <p className="desc">
        Versatile web developer skilled in HTML, CSS, and JavaScript. Committed
        to crafting visually engaging and responsive websites. Strong
        collaborator and quick learner of emerging technologies.
      </p>
    </>
  );
}

function Hire() {
  return (
    <>
      <button class="button">Hire Me</button>
    </>
  );
}

function Skillset() {
  return (
    <div className="skillsetcontainer">
      <div className="skill-set">
        <Skill name="React" emoji="💪" color="blue" />
        <Skill name="HTML" emoji="💪" color="lightgreen" />
      </div>
      <div className="skill-set">
        <Skill name="CSS" emoji="💪" color="orange" />
        <Skill name="JavaScript" emoji="💪" color="purple" />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <>
      <span className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.name}</span>
        <span>{props.emoji}</span>
      </span>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
