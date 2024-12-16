import { FolderOpenDot } from "lucide-react";
import "./App.css";
import ProjectCard from "./component/ProjectCard";
import { ProjectCardProps } from "./types/projectCard-props";

const mockData: Array<ProjectCardProps> = [
  {
    isFooterBlurred: true,
    project: {
      title: "project1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, architecto reprehenderit! Dignissimos quia praesentium reiciendis aliquam tempora ipsam quas provident ipsum ex assumenda distinctio eveniet, veniam reprehenderit. Obcaecati aliquam odio voluptate expedita harum qui rerum corrupti magnam dicta repellat illo sint laudantium, pariatur, id vitae, dolore quae! Voluptatem consequuntur ab exercitationem assumenda voluptas quibusdam natus earum quod recusandae pariatur ipsum quo, dolorem a sed aliquam perferendis. Nam non velit ut quia, fugiat architecto ad doloremque, enim aliquam iste quo sint ipsa repellat consequuntur, odit at amet fugit eos dignissimos voluptas nobis dolores. Perferendis quasi accusantium impedit. Quis nemo ex iste? ",
      startIcon: <FolderOpenDot />,
    },
  },
  {
    isFooterBlurred: true,
    project: {
      title: "project2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, architecto reprehenderit! Dignissimos quia praesentium reiciendis aliquam tempora ipsam quas provident ipsum ex assumenda distinctio eveniet, veniam reprehenderit. Obcaecati aliquam odio voluptate expedita harum qui rerum corrupti magnam dicta repellat illo sint laudantium, pariatur, id vitae, dolore quae! Voluptatem consequuntur ab exercitationem assumenda voluptas quibusdam natus earum quod recusandae pariatur ipsum quo, dolorem a sed aliquam perferendis. Nam non velit ut quia, fugiat architecto ad doloremque, enim aliquam iste quo sint ipsa repellat consequuntur, odit at amet fugit eos dignissimos voluptas nobis dolores. Perferendis quasi accusantium impedit. Quis nemo ex iste? ",
      startIcon: <FolderOpenDot />,
    },
  },
];
export default function App() {
  return (
    <main className="gap-x-10 md:grid md:grid-cols-11">
      <nav className="mt-5 space-y-5 sm:col-span-3 lg:col-span-2">hello</nav>
      <section className="col-span-8 my-10 flex h-full w-full flex-col justify-between gap-y-4 md:my-0 lg:col-span-8">
        <h1>Hello Jarrrr</h1>
        <ul className="w-full">
          {mockData.map((data, index) => (
            <li key={index} className="py-8">
              <ProjectCard {...data} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
