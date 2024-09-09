import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


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
      
      {skills.map(skill => <Skill key={skill.skill} skill={skill.skill} color={skill.color}  level={skill.level} />)}
    </main >
  )
}
function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{backgroundColor: color}}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👶" }
           {level === "intermediate"  &&"👍" }
           {level === "advanced" && "💪" }
          </span>
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
