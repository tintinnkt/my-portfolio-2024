import { FileBadge2, FolderOpenDot, HomeIcon, StarIcon } from "lucide-react";
import { mockData } from "./assets/mockData";
import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";

import { useState } from "react";
import { TypingAnimation } from "./component/ui/HyperText";
import { IconCloudComponent } from "./component/ui/InteractiveIconCloud";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  const { handleScroll } = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-0 my-auto flex min-h-full w-screen justify-center">
      <main className="flex w-full items-center justify-center px-2 pt-1 md:w-3/5 md:min-w-[760px]">
        <nav className="fixed top-1 z-50 w-full rounded-xl bg-slate-800 px-3 md:w-fit">
          {/* Toggle Button for Small Screens */}
          <div className="flex items-center justify-between md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <span className="text-lg">✖</span> // Close icon
              ) : (
                <span className="text-lg">☰</span> // Hamburger icon
              )}
            </button>
          </div>

          {/* Collapsible Menu with Animation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } md:max-h-full md:opacity-100`}
          >
            <ul className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <li className="w-fit justify-center py-1">
                <a
                  href="#welcome"
                  className="flex justify-start font-medium text-white"
                  onClick={(e) => handleScroll(e, "welcome")}
                >
                  <div className="px-2 sm:px-1">
                    <HomeIcon />
                  </div>
                  Welcome
                </a>
              </li>
              {mockData.map(({ title, highlight, type }, index) => (
                <li className="w-fit justify-center py-1" key={index}>
                  <a
                    href={`#${title}`}
                    className="flex justify-start font-medium text-white"
                    onClick={(e) => handleScroll(e, title)}
                  >
                    <div className="px-2 sm:px-1">
                      {type === "project" ? <FolderOpenDot /> : <FileBadge2 />}
                    </div>
                    <p className="flex items-center px-1">
                      {title}
                      {highlight && (
                        <StarIcon
                          fill="#FDE046"
                          className="mx-2 text-yellow-300 sm:mx-1"
                        />
                      )}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <section className="my-10 flex h-full w-full flex-col justify-between gap-y-4 sm:col-span-8 md:my-0 lg:col-span-9">
          <ul className="w-full space-y-10">
            <li
              id={"welcome"}
              className="grid items-center justify-items-center sm:grid-cols-2"
            >
              <div className="text-center">
                <TypingAnimation>Welcome to here</TypingAnimation>
                <ProfileCard />
              </div>
              <IconCloudComponent />
            </li>
            {mockData.map((data, index) => (
              <li id={data.title} key={index}>
                <ProjectCard {...data} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
