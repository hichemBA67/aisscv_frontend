import Image from "next/image";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  link: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: "/images/Repos/hpc.png",
    heading: "HPC Enabled Frameworks",
    subheading: "These repository serves as a template for using the HPC.",
    link: "https://git.scc.kit.edu/aiss_cv/hpc_enabled_frameworks",
  },
  {
    imgSrc: "/images/HPC/yolov8logo.png",
    heading: "YOLO",
    subheading: "These repository save all trained models.",
    link: "https://git.scc.kit.edu/aiss_cv/yolo_models",
  },
  {
    imgSrc: "/images/Architecture/nvidia.png",
    heading: "Jetson Nano",
    subheading:
      "This repository includes all code that the Jetson Nano runs for inference and opening the websocket.",
    link: "https://git.scc.kit.edu/aiss_cv/jetson-nano",
  },
  {
    imgSrc: "/images/Architecture/flask.png",
    heading: "Flask Backend",
    subheading:
      "This repository inlcudes the RESTful backend and the SQLite database.",
    link: "https://git.scc.kit.edu/aiss_cv/rest-backend",
  },
  {
    imgSrc: "/images/Architecture/angular.png",
    heading: "Angular Frontend",
    subheading:
      "This repository includes the entire user inferface in Angular.",
    link: "https://git.scc.kit.edu/aiss_cv/ui-lego",
  },
];

const Repos = () => {
  return (
    <div
      className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative"
      id="repos-section"
    >
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Repositories
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish">
        Here is the list of all repositores we accumulated for this project.{" "}
        <br />
        <small className="text-offwhite text-center">
          <a
            href="https://git.scc.kit.edu/aiss_cv/"
            className="hover-underlined"
            target="_blank"
          >
            All Repositories
          </a>
        </small>
      </p>
      <div className="radial-bg hidden lg:block"></div>

      <div>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 lg:-mr-56 mt-10">
          {featuresdata.map((items, i) => (
            <div
              className="bg-blue py-10 pr-12 pl-6 rounded-lg card-link"
              key={i}
            >
              <a href={items.link} target="_blank">
                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={24}
                    height={30}
                  />
                </div>
                <h5 className="text-offwhite text-lg font-medium mb-4">
                  {items.heading}
                </h5>
                <p className="text-lightblue text-sm font-normal">
                  {items.subheading}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repos;
