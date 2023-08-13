import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ItemType {
  id: number;
  section: string;
  title: string[];
  links: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const items: ItemType[] = [
  {
    id: 1,
    section: "Links",
    title: ["Repositories", "Documentation", "Frontend"],
    links: [
      "https://git.scc.kit.edu/aiss_cv",
      "https://git.scc.kit.edu/aiss_cv/documentation",
      "https://aisscv-ui.vercel.app/",
    ],
  },
];

const socialLinks: Social[] = [
  {
    imgsrc: "/images/Footer/gitlab.svg",
    href: "https://git.scc.kit.edu/aiss_cv",
  },
];

const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-6">
            <h3 className="text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16">
              {" "}
              <u>Disclaimer:</u> This website is not the entire documentation.
              It serves as an illustration of the key aspects of our project and
              documentation.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {items.map((item) => (
            <div key={item.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">
                {item.section}
              </p>
              <ul>
                {item.title.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={item.links[index]}
                      className="text-offwhite  text-sm font-normal mb-6 space-links"
                      target="_blank"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Our Team</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              Hichem
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              Jan
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              Meriton
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              Philip
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              Ruize
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
