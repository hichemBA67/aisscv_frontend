import Image from "next/image";

interface performanceData {
  index: number;
  model: string;
  dataset: string;
  datasetLink: string;
  subModel: string;
  weights: string;
  modelLink: string;
  epochs: number;
  precision: number;
  recall: number;
  map50: number;
  map50_95: number;
}

const performanceData: performanceData[] = [
  {
    index: 1,
    model: "YOLOv5",
    dataset: "v3_0/vfinal",
    datasetLink: "https://app.roboflow.com/aisscv-ffp8r/aiss_cv-sx8yb/6",
    subModel: "medium",
    weights: "yolov5m.pt",
    modelLink:
      "https://git.scc.kit.edu/aiss_cv/yolo_models/yolov5/-/blob/main/v3_0_640x_128b_300e_noStartWeightsW_v5m-model/weights/best.pt",
    epochs: 300,
    precision: 0.934,
    recall: 0.936,
    map50: 0.957,
    map50_95: 0.838,
  },
  {
    index: 2,
    model: "YOLOv7",
    dataset: "v3_0/vfinal",
    datasetLink: "https://app.roboflow.com/aisscv-ffp8r/aiss_cv-sx8yb/6",
    subModel: "tiny",
    weights: "yolov7.pt",
    modelLink:
      "https://git.scc.kit.edu/aiss_cv/yolo_models/yolov7/-/blob/main/Yolov7final/last%20200%20epochs/weights/best.pt",
    epochs: 300,
    precision: 0.933,
    recall: 0.926,
    map50: 0.954,
    map50_95: 0.842,
  },
  {
    index: 3,
    model: "YOLOv8",
    dataset: "v3_0/vfinal",
    datasetLink: "https://app.roboflow.com/aisscv-ffp8r/aiss_cv-sx8yb/6",
    subModel: "nano",
    weights: "yolov8n.pt",
    modelLink:
      "https://git.scc.kit.edu/aiss_cv/yolo_models/yolov8/-/blob/main/vfinal_640x_16b_300e_V8nW_v8n_best_pt-model/weights/best.pt",
    epochs: 300,
    precision: 0.926,
    recall: 0.946,
    map50: 0.966,
    map50_95: 0.854,
  },
];

const Performance = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-40 px-6" id="performance-section">
        <div className="text-center mb-14">
          <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
            Performance
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            We trained over 15 models for YOLOv5, YOLOv7 & YOLOv8. <br /> Here
            are the performances of each for the last version of the data set.
          </p>
          <small className="text-offwhite">
            <a
              href="https://git.scc.kit.edu/aiss_cv/documentation/-/blob/main/Training/Performance.md"
              className="hover-underlined"
              target="_blank"
            >
              Detailed documentation
            </a>
          </small>
        </div>
        <div className="performance-b bg-navyblue p-8 overflow-x-auto">
          <h3 className="text-offwhite text-2xl">Top Model Performances</h3>
          <table className="performance-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-darkblue rounded-lg">
                <th className="px-4 py-4 font-normal">MODEL</th>
                <th className="px-4 py-4 font-normal">DATASET</th>
                <th className="px-4 py-4 font-normal">SUB-MODEL</th>
                <th className="px-4 py-4 font-normal">WEIGHTS</th>
                <th className="px-4 py-4 font-normal">EPOCHS</th>
                <th className="px-4 py-4 font-normal">PRECISION</th>
                <th className="px-4 py-4 font-normal">RECALL</th>
                <th className="px-4 py-4 font-normal">MAP50</th>
                <th className="px-4 py-4 font-normal">MAP50-95</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((items, i) => (
                <tr key={i} className="border-b border-b-darkblue">
                  <td className="px-4 py-6 text-center text-white">
                    {items.model}
                  </td>
                  <td className="px-4 py-6 text-center">
                    <a
                      href={items.datasetLink}
                      className="text-white highlight-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {items.dataset}
                    </a>
                  </td>

                  <td className="px-4 py-6 text-center text-white">
                    {items.subModel}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    <a
                      href={items.modelLink}
                      className="text-white highlight-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {items.weights}
                    </a>
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.epochs}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.precision}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.recall}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.map50}
                  </td>
                  <td className="px-4 py-6 text-center text-white">
                    {items.map50_95}
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

export default Performance;
