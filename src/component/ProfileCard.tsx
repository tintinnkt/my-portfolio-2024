import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Skeleton,
} from "@nextui-org/react";
import { Github, Link } from "lucide-react";
import { useState } from "react";
export default function ProfileCard() {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Skeleton
      isLoaded
      className="my-4 max-w-[360px] rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-neutral-700"
    >
      <Card isBlurred className="bg-background/40">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://i.pinimg.com/736x/13/8c/f5/138cf505bf71f39b5e9ebdcc9c6b9942.jpg"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Krittin Tragunejindarat
              </h4>
              <h5 className="text-small tracking-tight">@tintinnkt</h5>
            </div>
          </div>
          <Button
            className={
              isFollowed
                ? "border-default-200 bg-transparent text-foreground"
                : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small">
          <p className="py-2 indent-2">
            Computer engineering student passionate about software development,
            eager to build innovative and efficient solutions.
          </p>
          <Chip className="" size="sm" variant="solid" color="success">
            #FrontendWithTintin
            <span aria-label="computer" className="py-2" role="img">
              💻
            </span>
          </Chip>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1" onClick={() => {}}>
            <Github />
            <p className="text-small">Github</p>
          </div>
          <div className="flex gap-1">
            <Link />
            <p className="text-small">links here</p>
          </div>
        </CardFooter>
      </Card>
    </Skeleton>
  );
}
