"use client";
import Image from "next/image";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-image relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="6ERkzYlu3Os"
        onClose={() => setOpen(false)}
      />

      <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className="height-Architecture">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-16">
            <div className="arrowTwo"></div>
            <div className="col-span-7">
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                AISS: <br /> Application in Computer Vision
              </h1>
              <p className="text-white md:text-lg font-normal mb-10 md:text-start text-center">
                Hey! We&apos;re group 3. Welcome to our documentation for
                <br />
                the Artificial Intelligence in Service System: Application in
                Computer Vision project documentation. This is by no means the
                full documentation. This website should give you an appealing
                insight into our project experice. By clicking the button below,{" "}
                you can access our full documentation <br /> on gitlab. By
                clicking the play button, you can see a short demo of our
                prototype.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <a
                  className="text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6"
                  href="https://git.scc.kit.edu/aiss_cv/documentation"
                  target="_blank"
                >
                  Full Documentation
                </a>
                <button
                  onClick={() => setOpen(true)}
                  className="bg-transparent flex justify-center items-center text-white"
                >
                  <Image
                    src={"/images/Banner/playbutton.svg"}
                    alt="button-image"
                    className="mr-3"
                    width={47}
                    height={47}
                  />
                  Demo
                </button>
              </div>
            </div>

            <div className="col-span-5 lg:-m-48 items-end">
              <div className="arrowThree"></div>
              <div className="arrowFour"></div>
              <div className="arrowFive"></div>
              <Image
                src="/images/Banner/mindstorm.png"
                alt="nothing"
                width={600}
                height={600}
                className="mt-40 ml-40"
              />
              <div className="arrowSix"></div>
              <div className="arrowSeven"></div>
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
