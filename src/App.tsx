import "./App.css";
import ProjectDisplay from "./components/Projects";
import Header from "./components/Header";
import projectsJSON from "./assets/text/projects.json";
import image1 from "./assets/images/profile_picture.png";
import linkedin from "./assets/images/LI-In-Bug.png"

function App() {
  const project_title = "Project title here";
  const project_content = "Project description here";
  const project_repolink = "github.com";
  const project_imagesrc = image1;

  const entry = {
    imgsrc: project_imagesrc,
    title: project_title,
    repo_link: project_repolink,
    content: project_content,
  };
  const entry2 = {
    imgsrc: projectsJSON[0].imgsrc,
    title: projectsJSON[0].title,
    repo_link: projectsJSON[0].repo_link,
    content: projectsJSON[0].content,
  };

  const headerEntry = {
    photo: image1,
    name: "Jimmy Lao",
    desc: "Autobiography about myself...",
  };

  return (
    <>
      <Header entry={headerEntry} />
      <ProjectDisplay entry={entry} />
      <ProjectDisplay entry={entry2} />
      <ProjectDisplay entry={entry} />
    </>
  );
}

export default App;
