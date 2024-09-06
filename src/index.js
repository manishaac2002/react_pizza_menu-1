import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="./human.jpeg" alt="Avatar" />
    </div>)
}

function Intro() {
  return (
    <div>
      <h1>Hi, I'm Manisha</h1>
      <p>I'm a web developer. I'm currently learning React in that course specifically for this project. 
        I'm a web developer. I'm currently learning React in that course specifically for this project. I'm a web developer. 
        I'm currently learning React in that course specifically for this project
      </p>
    </div>
  )
}

function SkillList() {
  return (
    <main className="skill-list ">
      <Skill 
      skill="HTML + CSS" color="red"/>
      <Skill 
      skill="Java Script" color="blue"/>
      <Skill 
      skill="Web Design" color="yellow"/>
      <Skill 
      skill="Git and Github" color="purple"/>
      <Skill 
      skill="React" color="orange"/>
      <Skill 
      skill="Svelte" color="pink"/>
    </main >
  )
}
function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
        <span>{props.skill}</span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
