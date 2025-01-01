import { User } from "@/types/user";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import { FolderCodeIcon, Linkedin } from "lucide-react";
import { HyperText } from "./ui/HyperText";

export default function ProfileCard({ user }: { user: User }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  return (
    <Skeleton
      isLoaded
      className="my-4 max-w-[400px] rounded-3xl bg-gradient-to-r from-purple-900 to-pink-300 shadow-lg shadow-neutral-700"
    >
      <Card isBlurred className="rounded-3xl bg-background/30">
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
                {user.firstName + " " + user.lastName}
              </h4>
              <h5 className="text-small tracking-tight"> @{user.username}</h5>
            </div>
          </div>
          <>
            <Button
              className={
                isOpen
                  ? "border-default-200 bg-transparent text-foreground"
                  : ""
              }
              color="primary"
              radius="full"
              size="sm"
              variant={isOpen ? "bordered" : "solid"}
              onPress={() => handleOpen()}
            >
              {isOpen ? "Mini View" : "Full View"}
            </Button>
            <Modal
              isOpen={isOpen}
              size={"lg"}
              onClose={onClose}
              hideCloseButton
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-2xl">
                      <HyperText duration={1500} delay={100}>
                        About Me
                      </HyperText>
                    </ModalHeader>
                    <ModalBody>
                      <div className="flex flex-col gap-4">
                        {/* About Section */}
                        <div className="flex justify-between space-x-3">
                          <div className="flex h-36 w-36 min-w-36 items-center justify-center overflow-hidden rounded-full border-2 border-primary">
                            <Image
                              src="/image/profilePic.jpg"
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex items-center justify-center px-2">
                            <p className="text-pretty text-justify indent-6 text-sm text-gray-600">
                              {user.aboutMe}
                            </p>
                          </div>
                        </div>

                        {/* Contact Details */}
                        <div>
                          <h3 className="text-lg font-semibold">Contact</h3>
                          <div className="grid grid-cols-4 text-sm text-gray-600">
                            <strong>Email:</strong>{" "}
                            <div className="col-span-3">{user.email}</div>
                            <strong>Phone:</strong>{" "}
                            <div className="col-span-3">+66 {user.phone}</div>
                            <strong>Location:</strong>
                            <div className="col-span-3">{user.location}</div>
                          </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="py-2">
                          <h3 className="text-lg font-semibold">
                            Find Me Online
                          </h3>
                          <ul className="flex gap-3 py-1 text-sm text-gray-600">
                            <li>
                              {user.githubLink && (
                                <Button
                                  className="flex gap-1 text-small font-semibold"
                                  variant="flat"
                                  color="primary"
                                  as={Link}
                                  isExternal={true}
                                  href={user.githubLink}
                                  endContent={<FolderCodeIcon />}
                                >
                                  Github
                                </Button>
                              )}
                            </li>
                            <li>
                              {user.linkedinLink && (
                                <Button
                                  className="flex gap-1 text-small font-semibold"
                                  variant="flat"
                                  color="primary"
                                  as={Link}
                                  href={user.linkedinLink}
                                  endContent={<Linkedin />}
                                >
                                  Linkedin
                                </Button>
                              )}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        </CardHeader>
        <CardBody className="px-3 pb-3 text-small">
          <p className="text-pretty pb-2 indent-2">{user.description}</p>
          <div className="flex flex-wrap space-x-1">
            {user.tags?.map((tag, index) => (
              <Chip key={index} size="sm" variant="solid" color="success">
                #{tag}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>
    </Skeleton>
  );
}
