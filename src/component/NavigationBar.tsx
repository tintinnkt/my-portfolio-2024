import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { twJoin } from "tailwind-merge";
import { TypingAnimation } from "./ui/HyperText";
interface NavigationBarProps {
  navData: Array<{
    title: string;
    type: string;
    highlight?: boolean;
  }>;
}
export default function NavigationBar({ navData }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleScroll } = useSmoothScroll();
  const handleLinkPress = (title: string) => {
    setIsMenuOpen(false);
    handleScroll(title);
  };

  return (
    <Navbar
      className={twJoin("select-none", !isMenuOpen ? "rounded-b-xl" : "")}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="cursor-pointer">
          <Link
            onPress={() => handleLinkPress("welcome")}
            className="font-bold text-inherit transition-all hover:scale-125"
          >
            <TypingAnimation className="text-xl md:text-lg">
              TINTIN
            </TypingAnimation>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        {navData.map(({ title }, index) => (
          <NavbarItem
            key={index}
            className="cursor-pointer rounded-xl px-2 py-2 transition-all hover:scale-110 hover:bg-slate-500/30 hover:text-white"
          >
            <Link onPress={() => handleLinkPress(title)}>{title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {navData.map(({ title }, index) => (
          <NavbarMenuItem key={index}>
            <Link onPress={() => handleLinkPress(title)}>{title}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent></NavbarContent>
    </Navbar>
  );
}
