import React from "react";
import Socials from "./Socials";
import "./Header.css";

interface HeaderEntry {
  photo: string;
  name: string;
  desc: string;
}

const Header: React.FC<HeaderEntry> = ({ photo, name, desc }) => {
  return (
    <div className="header-entry">
      <img alt={"profile-pic"} src={photo} />
      <div className="profile-text">
        <h1>{name}</h1>
        <p>{desc}</p>
        <div className="socials">
          <Socials
            link={"https://wwww.linkedin.com/in/jimmylao/"}
            icon={photo}
          ></Socials>
          <Socials
            link={"https://wwww.linkedin.com/in/jimmylao/"}
            icon={photo}
          ></Socials>
          <Socials
            link={"https://wwww.linkedin.com/in/jimmylao/"}
            icon={photo}
          ></Socials>
        </div>
      </div>
    </div>
  );
};

export default Header;
