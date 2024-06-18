import "./App.css";

/* Component imports */
import ProjectDisplay from "./components/Projects";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

/* JSON raw data imports */
import projects from "../public/text/projects.json";
import header from "../public/text/header.json";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Header photo={header.photo} name={header.name} desc={header.desc} />
      <h1>Experience</h1>

      <h1>Projects</h1>
      <div className="projects-section">
        {projects.map((project, index) => (
          <ProjectDisplay
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            repo_link={project.repo_link}
            content={project.content}
          />
        ))}
      </div>
    </>
  );
};

export default App;
