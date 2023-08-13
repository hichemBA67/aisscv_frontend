import Image from "next/image";

const UseCase = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-20 px-6" id="usecase-section">
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            Use Case
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            We defined two use cases for our prototype. <br />
            Both are an integral part of the LEGO Experience.
          </p>
          <small className="text-offwhite">
            <a
              href="https://git.scc.kit.edu/aiss_cv/documentation/-/blob/main/UseCase.md"
              className="hover-underlined"
              target="_blank"
            >
              Detailed documentation
            </a>
          </small>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Checking for Completeness Section */}
          <div className="bg-navyblue p-8 rounded-lg shadow-md">
            <h1 className="text-2xl text-offwhite md:text-3xl font-semibold mb-4">
              Checking for Completeness
            </h1>
            <h2 className="text-xl font-medium text-bluish mb-6">
              Ensuring Every Piece is Present for Lego Robot Assembly
            </h2>
            <p className="mb-4 text-offwhite">
              The core mission of the completeness check is verifying the
              availability of every required piece for the Lego robot assembly.
              This process involves more than a quick overview. The model is
              proficient at identifying each piece, even distinguishing between
              those that look similar.
            </p>
            {/* ... Rest of the content for this section ... */}
          </div>

          {/* The Assembly Guide Section */}
          <div className="bg-navyblue p-8 rounded-lg shadow-md">
            <h1 className="text-2xl text-offwhite md:text-3xl font-semibold mb-4">
              The Assembly Guide
            </h1>
            <h2 className="text-xl font-medium text-bluish mb-6">
              Intuitive Assembly Assistance: Elevating the Lego Robot Building
              Process
            </h2>
            <p className="mb-4 text-offwhite">
              The assembly guide is designed to reshape the sometimes
              overwhelming and error-prone process of Lego robot building into a
              smooth, interactive, and mistake-proof experience. It offers
              instant feedback and guidance, bolstering confidence in builders
              across all skill levels.
            </p>
            {/* ... Rest of the content for this section ... */}
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
    </>
  );
};

export default UseCase;
