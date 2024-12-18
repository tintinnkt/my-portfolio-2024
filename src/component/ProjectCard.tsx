import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import { FileBadge2, FolderOpenDot, Star } from "lucide-react";
import { project } from "../types/projectCard-props";

const ProjectCard = (project: project) => {
  return (
    <Skeleton className="rounded-3xl p-1 sm:p-5" isLoaded={!0}>
      <Card
        isBlurred
        className="rounded-3xl bg-background/50 p-5 shadow-lg shadow-neutral-700 sm:p-8"
      >
        <CardHeader className="flex justify-between px-1">
          <div className="flex items-center justify-start gap-3">
            {project.type === "project" ? <FolderOpenDot /> : <FileBadge2 />}

            <div className="flex flex-col font-semibold">
              <p className="text-xl flex items-center gap-x-1">
                {project.title}{" "}
                {project.highlight && (
                  <Star
                    fill="#FDE046"
                    className="mx-2 text-yellow-300 sm:mx-1"
                  />
                )}
              </p>
              <p className="text-small text-default-500">{project.subtitile}</p>
            </div>
          </div>
          <div className="flex items-end">
            {project.includes.map((name) => (
              <div className="px-1">
                <Chip
                  color={project.type === "competition" ? "primary" : "warning"}
                  variant="solid"
                >
                  {name}
                </Chip>
              </div>
            ))}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-pretty text-justify indent-6 sm:indent-10">
            {project.description}
          </p>
        </CardBody>
        <Divider className="weight" />

        <CardFooter className="w-full py-4">
          <Accordion showDivider={false} isCompact>
            {project.tools ? (
              <AccordionItem
                key="tools"
                aria-label="Accordion 1"
                title="Frameworks and tools"
                subtitle="See what is used in this project"
                className="items-center font-bold"
              >
                {project.tools?.map(({ name, detail, type }, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 items-center gap-3 py-1 font-normal"
                  >
                    <div className="col-span-1 items-center">
                      <Chip
                        color={typeColor[type] || "default"}
                        className="w-full text-center"
                        variant="flat"
                      >
                        {type}
                      </Chip>
                    </div>
                    <div className="col-span-2 font-bold">{name}</div>
                    <div className="col-span-3">{detail}</div>
                  </div>
                ))}
              </AccordionItem>
            ) : null}
            <AccordionItem
              key="2"
              title="Accordion 2"
              aria-label="Accordion 2"
              subtitle="Press to expand"
            >
              <div className="grid w-fit grid-cols-2 items-center font-medium">
                <div>a</div>
                <div>b</div>
              </div>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>
    </Skeleton>
  );
};

export default ProjectCard;

const typeColor: Record<
  string,
  "primary" | "secondary" | "success" | "warning" | "danger"
> = {
  Framework: "primary",
  Dependency: "secondary",
  Service: "warning",
  Library: "danger",
  Tool: "success",
};
