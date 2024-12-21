import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import { FileBadge2, FolderOpenDot, Star } from "lucide-react";
import { mockData } from "./assets/mockData";
import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";
import { IconCloudComponent } from "./component/ui/InteractiveIconCloud";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  const { handleScroll } = useSmoothScroll();
  return (
    <div className="mx-0 my-auto max-w-full p-4 md:p-8">
      <main className="grid grid-cols-12 gap-x-2 lg:gap-x-6">
        <section className="sticky col-span-4 space-y-5 pt-5 md:mt-5 md:pt-20 lg:col-span-3">
          <div className="sticky top-0 md:top-10">
            <ProfileCard />
            <nav className="py-2 md:py-5">
              <Card
                className="max-w-[610px] rounded-3xl border-none bg-background/30 p-2 shadow-lg shadow-neutral-600 dark:bg-default-100/50 sm:p-4"
                shadow="sm"
              >
                <CardHeader className="justify-center">
                  What you want to see?
                </CardHeader>
                <Divider />
                <CardBody>
                  <ul>
                    {mockData.map(({ title, highlight, type }, index) => (
                      <li className="w-full justify-center py-1" key={index}>
                        <Link
                          isBlock
                          underline="focus"
                          className="grid w-full grid-cols-6 justify-center font-medium text-white"
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
                          <p className="col-span-5 flex items-center px-1">
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
            <IconCloudComponent />
          </div>
        </section>
        <section className="col-span-8 my-10 flex h-full w-full flex-col justify-between gap-y-4 md:my-0 lg:col-span-9">
          <h1 className="text-3xl">Hello Jarrrr</h1>
          <ul className="w-full">
            {mockData.map((data, index) => (
              <li id={data.title} key={index} className="py-2">
                <ProjectCard {...data} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
