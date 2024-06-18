import React from "react";
import "./Header.css";

interface HeaderEntry {
  photo: string;
  name: string;
  desc: string;
}

interface SocialClick {
  link: string;
  icon: string;
}

function Header(props) {
  return (
    <div className="header-entry">
      <div>
        <img
          className="profile-picture"
          alt={"profile-pic"}
          src={props.photo}
        />
      </div>
      <div className="profile-text">
        <h1 className="profile-name">{props.name}</h1>
        <p className="profile-desc">{props.desc}</p>

        <div>
          <ClickableSocial link={} icon={} />
        </div>
      </div>
    </div>
  );
}

function ClickableSocial(props: SocialClick) {
  return (
    <>
      <a href={props.link}>
        <img src={props.icon} alt={"icon"} width="3rem" height="3rem" />
      </a>
    </>
  );
}

export default Header;
