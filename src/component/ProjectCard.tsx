import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import { ProjectCardProps } from "../types/projectCard-props";

const ProjectCard = ({ isFooterBlurred, project }: ProjectCardProps) => {
  return (
    <Skeleton className="rounded-3xl" isLoaded={!0}>
      <Card
        isFooterBlurred={isFooterBlurred}
        className="rounded-3xl bg-white p-5 shadow-md shadow-neutral-200 sm:p-8"
      >
        <CardHeader className="flex gap-3 px-1">
          {project.startIcon}
          <div className="flex flex-col">
            <p className="text-xl">{project.title}</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider className="py-2" />
        <CardBody className="indent-6 sm:indent-2">
          {project.description}
        </CardBody>
        <CardFooter className="">
          <Accordion showDivider={false}>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Frameworks and tools"
              subtitle=""
              className="items-center"
            >
              lorem200
            </AccordionItem>
            <AccordionItem
              key="2"
              title="Accordion 2"
              aria-label="Accordion 2"
              subtitle="Press to expand"
            >
              222
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>
    </Skeleton>
  );
};

export default ProjectCard;
