import React from "react";

interface ExperienceEntry {
  imgsrc: string;
  title: string;
  content: string;
  dates: string;
  location: string;
}

function ExperienceDisplay({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="exp-entry">
      <div>
        <img src={entry.imgsrc} alt={"exp-image"} className="exp-image" />
      </div>
      <div className="exp-content">
        <h2 className="exp-title">{entry.title}</h2>
        <p className="exp-desc">{entry.content}</p>
      </div>
    </div>
  );
}
