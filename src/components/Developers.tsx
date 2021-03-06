function Developers() {
  const gitHubLink = "https://github.com/";
  const developers = [
    { name: "Felix", role: "Front-End", Github: `${gitHubLink}FrontFelix` },
    { name: "Christian", role: "Front-End", Github: `${gitHubLink}MiMeiner` },
    { name: "Philip", role: "Front-End", Github: `${gitHubLink}Prisberg` },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-around w-2/3 mx-auto gap-10 lg:mt-40">
      {developers.map((developer, index) => (
        <div
          key={index}
          className="card w-96 bg-neutral shadow-xl mx-auto text-base-900"
        >
          <div className="card-body">
            <h2 className="card-title text-left">{developer.name}</h2>
            <p className="text-left">{developer.role} Developer</p>
            <div className="card-actions justify-end pt-5">
              <a href={developer.Github} className="btn btn-secondary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Developers;
