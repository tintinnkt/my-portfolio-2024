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
import { HyperText } from "./ui/HyperText";
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
      className={twJoin("select-none hover:scale-105 transition-all", !isMenuOpen ? "rounded-b-xl" : "")}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBlurred
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand className="cursor-pointer">
          <Link
            onPress={() => handleLinkPress("welcome")}
            className="font-bold text-inherit transition-all hover:scale-125"
          >
            <HyperText delay={20}>TINTIN</HyperText>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden space-x-0 md:space-x-1 lg:flex"
        justify="center"
      >
        {navData.map(({ title }, index) => (
          <NavbarItem
            key={index}
            className="cursor-pointer rounded-xl py-2 transition-all hover:scale-110 hover:bg-slate-500/30 hover:text-white"
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
