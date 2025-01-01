import { useCallback } from "react";

export const useSmoothScroll = () => {
  const handleScroll = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    const navHeight = 75; // Adjust this value based on your nav height

    if (element) {
      const topPosition =
        element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return { handleScroll };
};
