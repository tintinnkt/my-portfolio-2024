import { useWindowWidth } from "@/hooks/useWindowWidth";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import { BadgeInfo, Github, Link } from "lucide-react";
import { ScratchToReveal } from "./ui/ScratchToReview";
export default function ProfileCard() {
  const windowWidth = useWindowWidth();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleComplete = () => {
    // Do Something
  };
  return (
    <Skeleton
      isLoaded
      className="my-4 max-w-[600px] rounded-3xl bg-gradient-to-r from-purple-900 to-pink-300 shadow-lg shadow-neutral-700"
    >
      <Card isBlurred className="bg-background/30">
        <CardHeader className="justify-between sm:flex sm:flex-wrap sm:space-y-1">
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
              isOpen ? "border-default-200 bg-transparent text-foreground" : ""
            }
            color="primary"
            radius="full"
            size="sm"
            variant={isOpen ? "bordered" : "solid"}
            onPress={onOpen}
          >
            {isOpen ? "Mini View" : "Full View"}
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            size="3xl"
            hideCloseButton
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    My Infomation
                  </ModalHeader>
                  <ModalBody className="flex w-fit items-center justify-center">
                    <p className="justify-left flex w-full items-center gap-x-2 text-left text-sm text-default-400">
                      <BadgeInfo /> Scratch this gradient image
                    </p>
                    <ScratchToReveal
                      width={windowWidth > 700 ? 600 : windowWidth * 0.9}
                      height={300}
                      minScratchPercentage={70}
                      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
                      onComplete={handleComplete}
                      gradientColors={["#F38CB8", "#FDCC92", "#A97CF8"]}
                    >
                      <><p className="text-xl">name : Krittin Tragunejindarat</p></>
                    </ScratchToReveal>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={handleComplete}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small">
          <p className="py-2 indent-2">
            Computer engineering student passionate about software development,
            eager to build innovative and efficient solutions.
          </p>
          <Chip className="" size="sm" variant="solid" color="success">
            #???
            <span aria-label="computer" className="py-2" role="img">
              💻
            </span>
          </Chip>
        </CardBody>
        <CardFooter className="gap-3">
          <Button
            className="flex gap-1 text-small font-semibold"
            variant="flat"
            color="primary"
            onPress={() => {}}
            endContent={<Github />}
          >
            Github
          </Button>
          <Button
            className="flex gap-1 text-small font-semibold"
            variant="flat"
            color="primary"
            endContent={<Link />}
          >
            Link
          </Button>
        </CardFooter>
      </Card>
    </Skeleton>
  );
}
