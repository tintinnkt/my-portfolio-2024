import { mockData } from "./assets/mockData";
import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";

import { Card, CardHeader, Image } from "@nextui-org/react";
import NavigationBar from "./component/NavigationBar";
import { IconCloudComponent } from "./component/ui/InteractiveIconCloud";
import { BlurFade } from "./component/ui/blue-fade-text";

export default function App() {
  const data = mockData;

  return (
    <div className="mx-0 my-auto flex min-h-full w-screen flex-col items-center justify-center">
      <main className="flex w-full flex-col items-center justify-center md:w-3/5 md:min-w-[760px]">
        <NavigationBar
          navData={data.map(({ title, type, highlight }) => ({
            title,
            type,
            highlight,
          }))}
        />
        <div className="px-3">
          <section className="my-10 flex h-full w-full flex-col justify-between gap-y-4 sm:col-span-8 md:my-0 lg:col-span-9">
            <ul className="w-full space-y-10">
              <li
                id={"welcome"}
                className="grid items-center justify-items-center sm:grid-cols-2"
              >
                <div className="text-center">
                  <BlurFade delay={0.25} inView>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Hello World 👋
                    </h2>
                  </BlurFade>
                  <BlurFade delay={0.25 * 2} inView>
                    <span className="text-pretty text-xl tracking-tighter drop-shadow-lg sm:text-3xl xl:text-4xl/none">
                      Scroll down to see my projects.
                    </span>
                  </BlurFade>
                  <ProfileCard />
                </div>
                <IconCloudComponent />
              </li>
              {data.map((data, index) => (
                <li id={data.title} key={index}>
                  <ProjectCard {...data} />
                </li>
              ))}
              <li className="py-3">
                <Card
                  className="col-span-12 h-[300px] sm:col-span-4"
                  isBlurred
                  isFooterBlurred
                >
                  <CardHeader className="absolute top-1 z-10 flex-col !items-start text-white">
                    mlk;
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 h-full w-full object-cover"
                    src="https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </Card>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
