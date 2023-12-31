"use client";
import { link } from "fs";
import Image from "next/image";

interface Architecturedata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
  linkMessage: string;
  link: string;
}

const Architecturedata: Architecturedata[] = [
  {
    imgSrc: "/images/Architecture/nvidia.png",
    heading: "Jetson Nano",
    subheading:
      "The Jetson Nano is our system's backbone, leveraging the YOLO model for image analysis.",
    hiddenpara:
      "The Nano continuously processes video streams from the camera feed, enabling real-time object detection. Using WebSockets for efficient real-time communication to the frontend.",
    linkMessage: "",
    link: "",
  },
  {
    imgSrc: "/images/Architecture/angular.png",
    heading: "Frontend",
    subheading:
      "Our frontend is built using Angular, focused on a user-centric design.",
    hiddenpara:
      "It offers a user interface for the two use cases. The frontend is optimized for a seamless real-time interactions with the Jetson Nano.",
    linkMessage: "View here",
    link: "https://aisscv-ui.vercel.app/",
  },
  {
    imgSrc: "/images/Architecture/flask.png",
    heading: "Backend",
    subheading: "A RESTful backend aiding in LEGO robot assembly using Flask.",
    hiddenpara:
      "The server offers endpoints which provide instructions based on assembly state, and checking the completeness of LEGO parts. It efficiently bridges the computer vision system with essential data for the LEGO assembly process.",
    linkMessage: "",
    link: "",
  },
];
const Architecture = () => {
  return (
    <div>
      <div
        className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative"
        id="architecture-section"
      >
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            Architecture
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            Our prototye is build on three pillars making up its architecture.
            They were carefully chosen, <br /> in order to suit the requirements
            and the use cases of the project.
          </p>
          <small className="text-offwhite">
            <a
              href="https://git.scc.kit.edu/aiss_cv/documentation/-/blob/main/Architecture.md"
              className="hover-underlined"
              target="_blank"
            >
              Detailed documentation
            </a>
          </small>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {Architecturedata.map((items, i) => (
            <div className="card-b p-8" key={i}>
              <div className="Architecture-img-bg rounded-full flex justify-center absolute p-6">
                <Image
                  src={items.imgSrc}
                  alt={items.imgSrc}
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <Image
                  src={"/images/Architecture/bg-arrow.svg"}
                  alt="arrow-bg"
                  width={85}
                  height={35}
                  className="text-red-500"
                />
              </div>
              <a href={items.link} className="hover-underlined" target="_blank">
                <small className="text-center text-offwhite font-bold">
                  {items.linkMessage}
                </small>
              </a>
              <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                {items.heading}
              </h3>
              <p className="text-base font-normal text-bluish text-center mt-2">
                {items.subheading}
              </p>
              <span className="text-base font-normal m-0 text-bluish text-center hides">
                {items.hiddenpara}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Architecture;
