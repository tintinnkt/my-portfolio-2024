import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import { FileBadge2, FolderOpenDot, Star } from "lucide-react";
import { mockData } from "./assets/mockData";
import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";

import { TypingAnimation } from "./component/ui/HyperText";
import { IconCloudComponent } from "./component/ui/InteractiveIconCloud";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  const { handleScroll } = useSmoothScroll();
  return (
    <div className="mx-0 my-auto min-h-full w-screen justify-center p-4 md:p-8">
      <header className="w-full items-center justify-center pt-36">
        <nav className="fixed top-1 z-50 w-11/12">
          <Card
            className="max-w-full rounded-3xl border-none bg-orange-950 p-2 shadow-lg shadow-neutral-600 sm:p-4"
            shadow="sm"
          >
            <CardHeader className="justify-center">
              What you want to see?
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="flex">
                {mockData.map(({ title, highlight, type }, index) => (
                  <li className="w-full justify-center py-1" key={index}>
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
            </CardBody>
          </Card>
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-x-6 md:gap-x-10">
        <section className="col-span-12 sm:col-span-4 lg:col-span-3">
          <div className="sticky top-44 justify-center space-y-10">
            <ProfileCard />

            <IconCloudComponent />
          </div>
        </section>
        <section className="col-span-12 my-10 flex h-full w-full flex-col justify-between gap-y-4 sm:col-span-8 md:my-0 lg:col-span-9">
          <ul className="w-full space-y-10">
            <li>
              <TypingAnimation>Welcome to here</TypingAnimation>
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
