"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface faqdata {
  heading: string;
  subheading: string;
  text: string;
}

const faqdata: faqdata[] = [
  {
    heading: "Labeling Quality",
    subheading: "Tightness of Bounding Boxes",
    text: "In computer vision, the precision of bounding box annotations in labeled datasets, like those for identifying Lego Robot parts, is crucial for model accuracy. Despite advancements in convolutional neural networks, the foundational significance of accurately labeled data, especially the tightness of bounding boxes, remains paramount for optimal model performance in specialized applications.",
  },
  {
    heading: "Nvidia Jetson Nano",
    subheading: "Experience with an edge device",
    text: "Working with the NVIDIA Jetson Nano, a compact but powerful edge device, challenged our conventional approach to deploying computer vision models due to its resource constraints. Adapting to the Nano's limitations required not only technical adjustments, but also fostered adaptability and innovation, emphasizing the distinct challenges and advantages of edge devices over traditional cloud-based solutions.",
  },
  {
    heading: "Time Consumption of Deployment",
    subheading: "Deploying on edge devices takes a lot of time",
    text: "Deploying AI on edge devices, such as the Jetson Nano, introduces challenges due to their limited computational power and storage, leading to longer deployment durations. The ARM-based architecture of the Nano, its end-of-support status with NVIDIA, and potential software incompatibilities further complicate deployment and ongoing maintenance compared to traditional systems.",
  },
  {
    heading: "Temporal Correlations in Video-Extracted Frames",
    subheading: "Be careful with splitting data into datasets",
    text: "When partitioning video-derived images for machine learning, temporal correlations between consecutive frames can introduce bias, potentially misrepresenting a model's generalization capabilities. It's essential to ensure testing datasets are uncorrelated with training data to accurately assess a model's real-world performance, as highlighted by our experience and the importance of distinct dataset partitioning.",
  },
];

const Learnings = () => {
  return (
    <div className="my-20 px-6 pt-40" id="learnings-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Learnings
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish">
        We&apos;ve learned a lot during this project. Here are are a few
        selected learnings. <br /> For a full description, view the detailed
        documentation. <br />
        <small className="text-offwhite text-center">
          <a
            href="https://git.scc.kit.edu/aiss_cv/documentation/-/blob/main/Learnings.md"
            className="hover-underlined"
            target="_blank"
          >
            Detailed documentation
          </a>
        </small>
      </p>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div className="">
            <div className="w-full px-4 pt-16">
              {faqdata.slice(0, faqdata.length / 2).map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>
                            {items.heading} <br />
                            <small>{items.subheading}</small>
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                          {items.text}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>

          {/* Column-2 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.slice(faqdata.length / 2).map((items, i) => (
                <div
                  className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                  key={i}
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                          <span>
                            {items.heading} <br />
                            <small>{items.subheading}</small>
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                          {items.text}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/images/Performance/Untitled.svg"}
        alt="ellipse"
        width={2460}
        height={102}
        className="md:mb-40 md:-mt-6"
      />
    </div>
  );
};

export default Learnings;
