import Image from "next/image";

interface dataSetData {
  version: string;
  preprocessing: boolean;
  preprocessingType: string[];
  augementation: boolean;
  trainValTestSplit: string;
  link: string;
}

const dataSetData: dataSetData[] = [
  {
    version: "v1_0",
    preprocessing: true,
    preprocessingType: ["Auto-orient", "640x640"],
    augementation: true,
    trainValTestSplit: "12k/1.1k/659",
    link: "https://app.roboflow.com/aisscv-ffp8r/aiss_cv-sx8yb/1",
  },
  {
    version: "v1_1",
    preprocessing: true,
    preprocessingType: ["Auto-orient", "640x640"],
    augementation: false,
    trainValTestSplit: "4.2k/1.2k/725",
    link: "https://app.roboflow.com/aisscv-ffp8r/aiss_cv-sx8yb/3",
  },
  {
    version: "vfinal",
    preprocessing: true,
    preprocessingType: ["Auto-orient", "640x640"],
    augementation: false,
    trainValTestSplit: "4.9/1.4k/837",
    link: "https://app.roboflow.com/aisscv-ffp8r/aiss_cv-sx8yb/6",
  },
];

const DataSet = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-40 px-6" id="dataset-section">
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            Data Sets
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            Since we iteratively generated data and improved the quality during
            the course of this project, <br />
            we ended up with three main data set versions.
          </p>
          <small className="text-offwhite">
            <a
              href="https://git.scc.kit.edu/aiss_cv/documentation/-/blob/main/Data/DataSet.md"
              className="hover-underlined"
              target="_blank"
            >
              Detailed documentation
            </a>
          </small>
        </div>
        <div className="performance-b bg-navyblue p-8 overflow-x-auto">
          <h3 className="text-offwhite text-2xl">Data Set Versions</h3>
          <table className="performance-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-darkblue rounded-lg">
                <th className="px-4 py-4 font-normal">DATASET VERSION</th>
                <th className="px-4 py-4 font-normal">PRE-PROCESSING</th>
                <th className="px-4 py-4 font-normal">PRE-PROCESSING TYPE</th>
                <th className="px-4 py-4 font-normal">AUGEMENTATION</th>
                <th className="px-4 py-4 font-normal">TRAIN/VAL/TEST SPLIT</th>
              </tr>
            </thead>
            <tbody>
              {dataSetData.map((items, i) => (
                <tr key={i} className="border-b border-b-darkblue">
                  <td className="px-4 py-6 text-center text-white">
                    <a
                      href={items.link}
                      className="text-white highlight-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {items.version}
                    </a>
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.preprocessing.toString().toUpperCase()}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.preprocessingType.map((type, index) => (
                      <span key={index}>
                        {type}
                        <br />
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.augementation.toString().toUpperCase()}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.trainValTestSplit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default DataSet;
