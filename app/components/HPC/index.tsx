import Image from "next/image";

const HPC = () => {
  return (
    <div
      className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative pt-50"
      id="hpc-section"
    >
      <div className="radial-bgone hidden lg:block"></div>

      <div className="grid lg:grid-cols-2 gap-x-5">
        {/* Column-1 */}
        <div>
          <Image
            src={"/images/HPC/hpc1.png"}
            alt="macBook-image"
            width={787}
            height={512}
          />
        </div>

        {/* Column-2 */}

        <div>
          <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">
            bwUniCluster2.0
          </h3>
          <h5 className="text-xl lg:text-xl font-semibold text-offwhite mb-6 text-center sm:text-start">
            Unlimited Training Resources
          </h5>
          <small className="text-offwhite text-center">
            <a
              href="https://git.scc.kit.edu/aiss_cv/documentation/-/blob/main/Training/HPC.md"
              className="hover-underlined"
              target="_blank"
            >
              Detailed documentation
            </a>
          </small>
          <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">
            We were given the opportunity to use the powerful high-performance
            cluster{" "}
            <a
              href="https://wiki.bwhpc.de/e/BwUniCluster2.0"
              className="text-underlined"
            >
              bwUniCluser2.0
            </a>{" "}
            to reduce our training time immensely. We created hpc enabled
            framework for all three YOLO versions and a template for job
            scripts. You can try them via the links below.
          </p>

          <div className="flex justify-between">
            <a
              href="https://git.scc.kit.edu/aiss_cv/hpc_enabled_frameworks/yolov5"
              className="image-link"
              target="_blank"
            >
              <Image
                className="pt-5"
                src={"/images/HPC/yolov5logo.png"}
                alt="yolov5"
                width={125}
                height={135}
              />
            </a>

            <div className="verticalLine"></div>
            <a
              href="https://git.scc.kit.edu/aiss_cv/hpc_enabled_frameworks/yolov7"
              className="image-link"
              target="_blank"
            >
              <Image
                className="mt-4"
                src={"/images/HPC/yolov7logo.png"}
                alt="yolov7"
                width={100}
                height={105}
              />
            </a>
            <div className="verticalLine"></div>
            <a
              href="https://git.scc.kit.edu/aiss_cv/hpc_enabled_frameworks/yolov8"
              className="image-link"
              target="_blank"
            >
              <Image
                className="mt-8"
                src={"/images/HPC/yolov8logo.png"}
                alt="yolov8"
                width={100}
                height={105}
              />
            </a>
            <div className="verticalLine"></div>
            <a
              href="https://git.scc.kit.edu/aiss_cv/hpc_enabled_frameworks/hpc_scripts"
              className="image-link"
              target="_blank"
            >
              <Image
                className="mt-6"
                src={"/images/HPC/bashlogo.png"}
                alt="bash"
                width={100}
                height={105}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPC;
