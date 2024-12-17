import { Card, CardBody, CardHeader, Chip, Spinner } from "@nextui-org/react";
import { mockData } from "./assets/mockData";
import ProfileCard from "./component/ProfileCard";
import ProjectCard from "./component/ProjectCard";

export default function App() {
  return (
    <div className="mx-0 my-auto max-w-full p-4 md:p-8">
      <main className="gap-x-5 md:grid md:grid-cols-12 md:gap-x-8">
        <section className="sticky space-y-5 pt-5 sm:col-span-4 md:mt-5 md:pt-20 lg:col-span-3">
          <div className="sticky top-10">
            <ProfileCard />
            <nav className="">
              <Card
                className="max-w-[610px] rounded-3xl border-none bg-background/30 p-5 shadow-lg shadow-neutral-600 dark:bg-default-100/50 sm:p-8"
                shadow="sm"
              >
                <CardHeader>Tintinnkt</CardHeader>
                <CardBody>
                  <ul>
                    <li>asdf</li>
                    <li>asdf</li>
                    <li>asdf</li>
                    <Chip>aa</Chip>
                  </ul>
                </CardBody>
              </Card>
            </nav>
          </div>
        </section>
        <section className="col-span-8 my-10 flex h-full w-full flex-col justify-between gap-y-4 md:my-0 lg:col-span-8">
          <h1 className="text-3xl">Hello Jarrrr</h1>
          <ul className="w-full">
            {mockData.map((data, index) => (
              <li key={index} className="py-2">
                <ProjectCard {...data} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
