import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";

import { Project } from "@/types/projectCard-props";
import { projectsData, user } from "./assets/mockData";
import NavigationBar from "./component/NavigationBar";
import { BlurFade } from "./component/ui/blue-fade-text";
import { IconCloudComponent } from "./component/ui/InteractiveIconCloud";

export default function App() {
  const data = projectsData;
  const startDelayTime = 0.25;

  return (
    <div className="mx-0 my-auto flex min-h-full w-screen flex-col items-center justify-center">
      <main className="flex w-full flex-col items-center justify-center md:min-w-[750px] lg:w-2/3">
        <NavigationBar
          navData={data.map(({ title, type, highlight }) => ({
            title,
            type,
            highlight,
          }))}
        />
        <BlurFade delay={startDelayTime} inView>
          <div className="px-3">
            <section className="my-10 flex h-full w-full flex-col justify-between gap-y-4 sm:col-span-8 md:my-0 lg:col-span-9">
              <ul className="w-full space-y-10">
                <li
                  id={"welcome"}
                  className="grid items-center justify-items-center sm:grid-cols-2"
                >
                  <div className="text-center">
                    <BlurFade delay={startDelayTime + 0.25 * 2} inView>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Welcome 👋
                      </h2>
                    </BlurFade>
                    <BlurFade delay={startDelayTime + 0.25 * 3} inView>
                      <span className="text-pretty text-xl tracking-tighter drop-shadow-lg sm:text-3xl xl:text-4xl/none">
                        Scroll down to see my projects.
                      </span>
                      <ProfileCard user={user} />
                    </BlurFade>
                  </div>

                  <BlurFade delay={startDelayTime + 0.25 * 3} inView>
                    <IconCloudComponent />
                  </BlurFade>
                </li>
                {data.map((data, index) => (
                  <li id={data.title} key={index}>
                    <ProjectCard {...(data as Project)} />
                  </li>
                ))}
              </ul>
            </section>
            <div className="h-48 py-2 items-end flex">
              <p className="text-center text-xl font-semibold text-slate-600 shadow-black drop-shadow-2xl w-full py-10">
                Thanks for visiting!
              </p>
            </div>
          </div>
        </BlurFade>
      </main>
    </div>
  );
}
