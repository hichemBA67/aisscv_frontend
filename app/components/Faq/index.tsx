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
    heading: "Jetson Nano",
    subheading: "Image, Versioning & more",
    text: "Deploying our model on the Nvidia Jetson Nano presented us with numerous challenges. Among them the stock image and versioning of serveral depencies, memory, overheating and more. We found the solution with the Ubuntu image provided by Quengineering.",
  },
  {
    heading: "Training resources",
    subheading: "Weak GPUs & the HPC",
    text: "Unfortunatly, our group was not blessed by powerful GPUs. This made trying and training different models very time consuming. The HPC was our savior.",
  },
  {
    heading: "Time",
    subheading: "Tight timelines, tighter ambitions",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6 pt-40" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Challenges & Solutions
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish">
        Over the period of this project, we faced a number of challenges. <br />
        We tried to solve them to best of our ability. Here you can see a short
        sneak peek. <br />
        <small className="text-offwhite text-center">
          <a
            href="https://git.scc.kit.edu/aiss_cv/documentation/-/blob/main/"
            className="hover-underlined"
          >
            Detailed documentation
          </a>
        </small>
      </p>

      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          {/* Column-1 */}
          <div>
            <div className="w-full px-4 pt-16">
              {faqdata.map((items, i) => (
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
          <div className="mt-32">
            <Image
              src={"/images/Faq/faq.svg"}
              alt="faq-image"
              width={941}
              height={379}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
