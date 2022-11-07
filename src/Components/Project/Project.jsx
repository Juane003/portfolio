const Project = ({ src, logos }) => {
  const renderLogos = (logo) => <img src={logo} key={logo} />;
  return (
    <div className="h-48 w-48 border border-black">
      <img src={src} />
      <div>{logos.map(renderLogos)}</div>
    </div>
  );
};
export default Project;
