import { MouseEvent } from "react";

export const useSmoothScroll = () => {
  const handleScroll = (e: MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { handleScroll };
};
