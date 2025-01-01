import { Project } from "@/types/projectCard-props";
import { User } from "@/types/user";
export enum ImagePath {
  moneyManagement = "/image/money-management/",
  cedtElective = "/image/cedt-elective/",
}

export const projectsData: Array<Project> = [
  {
    title: "Computer POSN",
    subtitile: "โครงการโอลิมปิกวิชาการ (สอวน.) วิชาคอมพิวเตอร์ ค่ายที่ 2",
    description:
      "Through my participation in POSN camps 1 and 2, I built a solid foundation in programming. In Camp 1, I learned C programming basics, including variables, operators, loops, arrays, functions, pointers, and file management. Camp 2 expanded my knowledge with C++ programming and data structures like linked lists, stacks, queues, heaps, and binary search trees. I also studied algorithms, including brute force, recursion, dynamic programming, greedy methods, and Dijkstra's algorithm, along with Big-O analysis. These experiences have given me a strong grasp of programming principles, preparing me to tackle complex challenges.",

    type: "competition",
    tools: ["ค่าย 2", "Data Structure", "Algorithm", "C++"],
    highlight: false,
  },
  {
    title: "Money Management App",
    subtitile: "Web Application (High School Project)",
    description:
      "In my first experience with React, I developed a money management web app to help users track income, expenses, and budgets. The app features transaction logging, categorization, budget management, and visualizations like spending trends using Chart.js. I learned to build reusable components, manage state with React hooks, and handle data flow. This project deepened my React skills, improved my problem-solving abilities, and taught me to design user-friendly, responsive applications with clear navigation.",
    type: "project",
    highlight: false,
    imagesPath: ImagePath.moneyManagement,
    gihubLink: "https://github.com/tintinnkt/fi-management-webapp",
    tools: [
      "React",
      "React DOM",
      "React Router DOM",
      "Firebase",
      "Vite.js",
      "Bootstrap Icons",
      "Date-fns",
      "React-Datepicker",
      "React Google Charts",
      "React Google Login",
      "TypeScript",
    ],
  },
  {
    title: "CEDT Elective",
    subtitile: "Course Selection Platform Web Application",
    description:
      "As part of my CEDT elective project, I worked on a university course selection platform, focusing on front-end development. I developed the course list and detail pages, enabling students to explore courses and check eligibility. Using Axios, I implemented interactions like bookmarking and course selection, with TanStack React Query for efficient data fetching and state management. The project used Next.js, Prisma as the ORM, Docker for local database management, and NextUI for components. While the UX/UI team designed the interface, I ensured my implementation adhered to their guidelines. This was my first experience with tools like Next.js, Prisma, and Docker, and I gained valuable skills in API integration, state management, and dynamic routing. My focus was on student-facing functionality, while the platform also supports course management for companies.",
    type: "project",
    imagesPath: ImagePath.cedtElective,
    highlight: true,
    link: "https://elective.cedt.community/",
    tools: [
      "Next.js",
      "NextAuth.js",
      "NextUI",
      "Axios",
      "Prisma Client",
      "Framer Motion",
      "React",
      "React DOM",
      "React Icons",
      "Class-Variance-Authority",
      "Tailwind CSS",
      "PostCSS",
      "TypeScript",
    ],
  },
  {
    title: "My Portfolio Website",
    subtitile: "This website show who am I and what I did. (DEC 2024)",
    description:
      "My latest modern, interactive personal portfolio website built with React, Vite, and TypeScript. It showcases my skills, projects, and achievements as a software developer. The project uses Tailwind CSS for styling and animations with Framer Motion for enhanced user experience. The site features a clean design with components powered by NextUI and Lucide React for icons.",
    type: "project",
    highlight: false,
    tools: ["Vite.js", "UX/UI", "Tailwind CSS", "TypeScript"],
    link: "here",
    gihubLink: "https://github.com/tintinnkt/my-portfolio-2024",
  },
];

export const user: User = {
  username: "tintinnkt",
  firstName: "Krittin",
  lastName: "Tragunejindarat",
  email: "t.tintinnkt@gmail.com",
  phone: "0969642818",
  location: "Bangkok, Thailand",
  description:
    "Computer engineering student passionate about software development, eager to build innovative and efficient solutions.",
  aboutMe:
    "Hi! I'm Krittin, a passionate web developer with a knack for crafting seamless user experiences. With expertise in React, TypeScript, and Tailwind CSS, I bring ideas to life on the web.",
  tags: ["FrontEnd", "BackEnd", "SoftwareEngineer"],
  githubLink: "https://github.com/tintinnkt",
};
