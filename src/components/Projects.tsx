import React from "react";
import "./Projects.css";

interface Entry {
  imgsrc: string;
  title: string;
  repo_link: string | null;
  content: string;
}

function ProjectDisplay({ entry }: { entry: Entry }) {
  return (
    <div className="project-entry">
      <div>
        <img
          src={entry.imgsrc}
          alt={"project-image"}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <h2 className="project-title">{entry.title}</h2>
        {entry.repo_link == null ? null : (
          <p className="project-link">{"GitHub repo: " + entry.repo_link}</p>
        )}
        <p className="project-desc">{entry.content}</p>
      </div>
    </div>
  );
}

export default ProjectDisplay;
