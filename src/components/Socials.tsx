interface SocialsEntry {
  link: string;
  icon: string;
}

const Socials: React.FC<SocialsEntry> = ({ link, icon }) => {
  return (
    <>
      <a href={link}>
        <img
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
          src={icon}
          alt={"social-icon"}
          width={"40rem"}
          height={"40rem"}
        />
      </a>
    </>
  );
};

export default Socials;
