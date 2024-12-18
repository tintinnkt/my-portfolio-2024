import { Card, CardBody, CardHeader, Divider, Link } from "@nextui-org/react";
import { Star } from "lucide-react";
import { mockData } from "./assets/mockData";
import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  const { handleScroll } = useSmoothScroll();
  return (
    <div className="mx-0 my-auto max-w-full p-4 md:p-8">
      <main className="gap-x-5 md:grid md:grid-cols-12 md:gap-x-8">
        <section className="sticky space-y-5 pt-5 sm:col-span-4 md:mt-5 md:pt-20 lg:col-span-3">
          <div className="sticky top-0 md:top-10">
            <ProfileCard />
            <nav className="py-2 md:py-5">
              <Card
                className="max-w-[610px] rounded-3xl border-none bg-background/30 p-5 shadow-lg shadow-neutral-600 dark:bg-default-100/50 sm:p-8"
                shadow="sm"
              >
                <CardHeader className="justify-center">
                  What you want to see?
                </CardHeader>
                <Divider />
                <CardBody>
                  <ul>
                    {mockData.map(({ title, highlight }) => (
                      <li className="flex justify-center py-1">
                        <Link
                          isBlock
                          href={`#${title}`}
                          underline="active"
                          className="w-full justify-center"
                          onClick={(e) => {
                            handleScroll(e, title);
                          }}
                        >
                          {highlight && (
                            <Star
                              fill="#FDE046"
                              className="mx-2 text-yellow-300 sm:mx-1"
                            />
                          )}
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </nav>
          </div>
        </section>
        <section className="col-span-8 my-10 flex h-full w-full flex-col justify-between gap-y-4 md:my-0 lg:col-span-8">
          <h1 className="text-3xl">Hello Jarrrr</h1>
          <ul className="w-full">
            {mockData.map((data) => (
              <li id={data.title} key={data.title} className="py-2">
                <ProjectCard {...data} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
