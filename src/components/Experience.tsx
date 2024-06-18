import React from "react";

interface ExperienceEntry {
  imgsrc: string;
  title: string;
  content: string;
  dates: string;
  location: string;
}

const ExperienceDisplay: React.FC<ExperienceEntry> = ({
  imgsrc,
  title,
  content,
  dates,
  location,
}) => {
  return (
    <div className="exp-entry">
      <div>
        <img src={imgsrc} alt={"exp-image"} className="exp-image" />
      </div>
      <div className="exp-content">
        <h2 className="exp-title">{title}</h2>
        <p className="exp-desc">{content}</p>
      </div>
    </div>
  );
};

export default ExperienceDisplay;
