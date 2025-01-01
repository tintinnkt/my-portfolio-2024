import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Skeleton,
  Tooltip,
} from "@nextui-org/react";
import {
  ExternalLinkIcon,
  FileBadge2,
  FolderOpenDot,
  GithubIcon,
  Star,
} from "lucide-react";
import { twJoin } from "tailwind-merge";
import { techStackMapping } from "../assets/constants/toolMapping";
import { Project } from "../types/projectCard-props";
import ImagesWithPagination from "./ImageWithPag";

const ProjectCard = (project: Project) => {
  return (
    <Skeleton className="rounded-3xl" isLoaded={!0}>
      <Card
        isBlurred
        className={twJoin(
          "rounded-3xl bg-background/60 p-5 shadow-lg sm:p-8",
          project.highlight ? "border-2 border-yellow-300/70" : "",
        )}
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
              <p className="text-pretty text-small text-default-500">
                {project.subtitile}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end space-x-2 space-y-1">
            {project.gihubLink && (
              <Button
                as={Link}
                href={project.gihubLink}
                isExternal={true}
                endContent={<GithubIcon />}
                color={"secondary"}
                variant="flat"
                className="font-bold hover:scale-110"
              >
                Github
              </Button>
            )}
            {project.link && project.link != "here" && (
              <Button
                as={Link}
                href={project.link}
                endContent={<ExternalLinkIcon />}
                color={"success"}
                variant="flat"
                className="font-bold hover:scale-110"
                isExternal={true}
              >
                See Website
              </Button>
            )}
            {project.link && project.link == "here" && (
              <Button
                isDisabled
                className="cursor-default py-3"
                color="primary"
                variant="flat"
                size="sm"
              >
                You are on this website.
              </Button>
            )}
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
                offset={-7}
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
                  color={typeColor[techStackMapping[tool]?.type] || "warning"}
                  className={twJoin(
                    "w-full text-center font-semibold",
                    techStackMapping[tool]?.type != undefined
                      ? "cursor-context-menu"
                      : "cursor-default",
                  )}
                  variant="solid"
                >
                  {tool}
                </Chip>
              </Tooltip>
            ))}
          </div>
        </CardBody>
        {project.imagesPath && <Divider />}

        {project.imagesPath && (
          <CardFooter className="flex w-full flex-col px-0 py-4">
            <Accordion showDivider={false} isCompact>
              {project.imagesPath ? (
                <AccordionItem
                  key="1"
                  title="Project Images"
                  aria-label="Project Images"
                  subtitle="Press to see images"
                >
                  <ImagesWithPagination
                    imagesPath={project.imagesPath}
                    imgPerpage={1}
                  />
                </AccordionItem>
              ) : null}
            </Accordion>
          </CardFooter>
        )}
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
  Language: "danger",
};
