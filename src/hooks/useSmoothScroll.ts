import { useCallback } from "react";

export const useSmoothScroll = () => {
  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      const navHeight = 180; // Adjust this value based on your nav height

      if (element) {
        const topPosition =
          element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    },
    [],
  );

  return { handleScroll };
};
