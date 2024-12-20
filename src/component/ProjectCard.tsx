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
  Tooltip,
} from "@nextui-org/react";
import { FileBadge2, FolderOpenDot, Star } from "lucide-react";
import { twJoin } from "tailwind-merge";
import { techStackMapping } from "../assets/constants/toolMapping";
import { project } from "../types/projectCard-props";
import ImagesWithPagination from "./ImageWithPag";

const ProjectCard = (project: project) => {
  return (
    <Skeleton className="rounded-3xl p-1 sm:p-5" isLoaded={!0}>
      <Card
        isBlurred
        className="rounded-3xl bg-background/50 p-5 shadow-lg shadow-neutral-700 sm:p-8"
      >
        <CardHeader className="flex justify-between px-1">
          <div className="flex items-center justify-start gap-3">
            <div className="p-1">
              {project.type === "project" ? <FolderOpenDot /> : <FileBadge2 />}
            </div>

            <div className="flex flex-col font-semibold">
              <p className="flex items-center gap-x-1 text-xl">
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
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-pretty text-justify indent-6 sm:indent-10">
            {project.description}
          </p>
          <div className="px-5 py-3">
            <Divider />
          </div>
          <div className="flex w-full flex-wrap gap-2 py-1">
            {project.tools?.map((tool, index) => (
              <Tooltip
                key={index}
                color={typeColor[techStackMapping[tool]?.type] || "default"}
                delay={1200}
                content={
                  techStackMapping[tool]?.type != undefined && (
                    <div>
                      {(techStackMapping[tool]?.type !== "none"
                        ? techStackMapping[tool]?.type + " : "
                        : "") + techStackMapping[tool]?.description}
                    </div>
                  )
                }
                className={
                  techStackMapping[tool]?.type == undefined ? "opacity-0" : ""
                }
              >
                <Chip
                  color={typeColor[techStackMapping[tool]?.type] || "default"}
                  className={twJoin(
                    "w-full text-center",
                    techStackMapping[tool]?.type != undefined
                      ? "cursor-context-menu"
                      : "cursor-default",
                  )}
                  variant="flat"
                >
                  {tool}
                </Chip>
              </Tooltip>
            ))}
          </div>
        </CardBody>
        <Divider />

        <CardFooter className="flex w-full flex-col py-4">
          <Accordion showDivider={false} isCompact>
            {/* {project.tools ? (
              <AccordionItem
                key="tools"
                aria-label="Accordion 1"
                title="Frameworks and tools"
                subtitle="See what is used in this project"
                className="items-center font-bold"
              >
                {project.tools?.map((name, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 items-center gap-3 py-1 font-normal"
                  >
                    <div className="col-span-1 items-center">
                      <Chip
                        color={
                          typeColor[techStackMapping[name].type] || "default"
                        }
                        className="w-full text-center"
                        variant="flat"
                      >
                        {techStackMapping[name].type}
                      </Chip>
                    </div>
                    <div className="col-span-2 font-bold">{name}</div>
                    <div className="col-span-3">
                      {techStackMapping[name].description}
                    </div>
                  </div>
                ))}
              </AccordionItem>
            ) : null} */}
            {project.imagesPath ? (
              <AccordionItem
                key="2"
                title="Accordion 2"
                aria-label="Accordion 2"
                subtitle="Press to expand"
              >
                <ImagesWithPagination
                  imagesPath={project.imagesPath}
                  imgPerpage={4}
                />
              </AccordionItem>
            ) : null}
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
  Library: "primary",
  "UI Library": "danger",
  Tool: "success",
  PaaS: "success",
  Service: "warning",
  "CSS Framework": "secondary",
  "Linting Tool": "success",
  Formatter: "success",
  ORM: "secondary",
  Component: "secondary",
  "Icon Set": "secondary",
  "Build Tool": "secondary",
};
