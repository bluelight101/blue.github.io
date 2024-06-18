import React from "react";
import "./Projects.css";

interface ProjectEntry {
  imgsrc: string;
  title: string;
  repo_link: string | null;
  content: string;
}

const ProjectDisplay: React.FC<ProjectEntry> = ({
  imgsrc,
  title,
  repo_link,
  content,
}) => {
  return (
    <div className="project-entry">
      <img src={imgsrc} alt={"project-image"} />
      <div className="project-text">
        <h2>{title}</h2>
        {repo_link == null ? null : (
          <p className="project-link">{"GitHub repo: " + repo_link}</p>
        )}
        <p className="project-desc">{content}</p>
      </div>
    </div>
  );
};

export default ProjectDisplay;
