import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Link,
  Skeleton,
} from "@nextui-org/react";
import { FolderCodeIcon } from "lucide-react";

const tags = ["FrontEnd", "BackEnd", "SoftwareEngineer"];
export default function ProfileCard() {
  return (
    <Skeleton
      isLoaded
      className="my-4 max-w-[400px] rounded-3xl bg-gradient-to-r from-purple-900 to-pink-300 shadow-lg shadow-neutral-700"
    >
      <Card isBlurred className="bg-background/30">
        <CardHeader className="justify-between sm:flex sm:flex-wrap sm:space-y-1">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://i.pinimg.com/736x/13/8c/f5/138cf505bf71f39b5e9ebdcc9c6b9942.jpg"
              className="select-none"
            />
            <div className="flex flex-col items-start justify-center gap-1 text-default-800">
              <h4 className="text-small font-semibold leading-none">
                Krittin Tragunejindarat
              </h4>
              <h5 className="text-small tracking-tight">@tintinnkt</h5>
            </div>
          </div>
          {/* <Button
            className={
              isOpen ? "border-default-200 bg-transparent text-foreground" : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isOpen ? "bordered" : "solid"}
          >
            {isOpen ? "Mini View" : "Full View"}
          </Button> */}
        </CardHeader>
        <CardBody className="px-3 py-0 text-small">
          <p className="text-pretty pb-2 indent-2">
            Computer engineering student passionate about software development,
            eager to build innovative and efficient solutions.
          </p>
          <div className="flex flex-wrap space-x-1">
            {tags.map((tag, index) => (
              <Chip key={index} size="sm" variant="solid" color="success">
                #{tag}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="gap-3">
          <Button
            className="flex gap-1 text-small font-semibold"
            variant="flat"
            color="primary"
            as={Link}
            href="https://github.com/tintinnkt"
            endContent={<FolderCodeIcon />}
          >
            Github
          </Button>
        </CardFooter>
      </Card>
    </Skeleton>
  );
}
