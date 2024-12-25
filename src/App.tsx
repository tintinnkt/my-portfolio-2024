import { Link } from "@nextui-org/react";
import { FileBadge2, FolderOpenDot, HomeIcon, Star } from "lucide-react";
import { mockData } from "./assets/mockData";
import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";

import { TypingAnimation } from "./component/ui/HyperText";
import { IconCloudComponent } from "./component/ui/InteractiveIconCloud";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  const { handleScroll } = useSmoothScroll();
  return (
    <div className="mx-0 my-auto flex min-h-full w-screen justify-center">
      <main className="flex w-3/5 min-w-96 items-center justify-center pt-1">
        <nav className="fixed top-1 z-50 w-fit rounded-xl bg-slate-800 px-3">
          <ul className="flex justify-center space-x-4">
            <li className="w-fit justify-center py-1">
              <Link
                isBlock
                underline="focus"
                className="flex justify-start font-medium text-white"
                color="secondary"
                onClick={(e) => handleScroll(e, "welcome")}
              >
                <div className="px-2 sm:px-1">
                  <HomeIcon />
                </div>
                Welcome
              </Link>
            </li>
            {mockData.map(({ title, highlight, type }, index) => (
              <li className="w-fit justify-center py-1" key={index}>
                <Link
                  isBlock
                  underline="focus"
                  className="flex justify-start font-medium text-white"
                  color="secondary"
                  onClick={(e) => {
                    handleScroll(e, title);
                  }}
                >
                  {type === "project" ? (
                    <div className="px-2 sm:px-1">
                      <FolderOpenDot />
                    </div>
                  ) : (
                    <div className="px-2 sm:px-1">
                      <FileBadge2 />
                    </div>
                  )}{" "}
                  <p className="flex items-center px-1">
                    {title}
                    {highlight && (
                      <Star
                        fill="#FDE046"
                        className="mx-2 text-yellow-300 sm:mx-1"
                      />
                    )}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className="my-10 flex h-full w-full flex-col justify-between gap-y-4 sm:col-span-8 md:my-0 lg:col-span-9">
          <ul className="w-full space-y-10">
            <li
              id={"welcome"}
              className="grid grid-cols-2 items-center justify-items-center"
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
            <li className="h-72"></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
