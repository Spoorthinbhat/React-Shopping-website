const Foption = ({ title, link }) => {
  return (
    <div className="Foption">
      <a href={link}>{title}</a>
    </div>
  );
};

export default Foption;
