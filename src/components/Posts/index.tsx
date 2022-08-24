import { useBreakpointValue } from "@chakra-ui/react";
import { Category } from "../../types";
import { Navbar } from "./Navbar";
import { SidebarNav } from "./Sidebar";

type NavigationProps = {
  category: Category;
}

export function Navigation({ category }: NavigationProps) {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return <SidebarNav category={category} />
  }

  return <Navbar category={category} />
}