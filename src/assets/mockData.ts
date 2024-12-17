import { ProjectCardProps } from "../types/projectCard-props";

export const mockData: Array<ProjectCardProps> = [
  {
    project: {
      title: "Computer POSN",
      subtitile: "โครงการโอลิมปิกวิชาการ (สอวน.) วิชาคอมพิวเตอร์ ค่ายที่ 2",
      description:
        "Through my participation in POSN camp1 and POSN camp2, I have gained a strong foundation in programming concepts and techniques. In the Camp 1st, I learned the basics of C programming, including variable types, operators, conditional statements, loops, arrays, strings, functions, pointers, and file management. This foundational knowledge laid the groundwork for my subsequent exploration of C++ programming in the Camp 2nd. There, I delved into the intricacies of data structures, such as linked lists, stacks, queues, heaps, and binary search trees, and gained proficiency in selecting appropriate algorithms for various problem-solving scenarios. My exposure to algorithms encompassed brute force algorithms, recursion, dynamic programming, greedy algorithms, Dijkstra's algorithm, and Big-O analysis of algorithms. These intensive learning experiences have equipped me with a comprehensive understanding of programming principles and practices, enabling me to confidently tackle complex programming challenges.",
      type: "competition",
    },
  },
  {
    project: {
      title: "Money Management App",
      subtitile: "Web Application",
      description:
        "In my first experience with React, I worked on a money management web application designed to help users track their income, expenses, and budgets effectively. The application includes features such as transaction logging, categorization, budget management, and insightful visualizations like spending trends and category breakdowns using tools like Chart.js. Through this project, I learned how to build dynamic and reusable components, manage application state efficiently with React hooks, and handle data flow between components. This experience not only deepened my understanding of React but also taught me how to design user-centric applications with responsive layouts and clear navigation. It significantly enhanced my problem-solving skills and provided valuable insights into building functional and visually appealing web applications.",
      type: "project",
      tools: [
        {
          name: "Vite.js",
          detail: "Fast build tool for modern React web applications.",
          type: "Framework",
        },
        {
          name: "Firebase Firestore Database",
          detail: "Store and retrieve application data in real time.",
          type: "Service",
        },
        {
          name: "Firebase Authentication",
          detail: "User authentication and registration service.",
          type: "Service",
        },
        {
          name: "Firebase Hosting",
          detail: "Deploy and host the web application.",
          type: "Service",
        },
        {
          name: "react-router-dom",
          detail: "Client-side routing and navigation.",
          type: "Library",
        },
        {
          name: "react-google-charts",
          detail: "Library for interactive charts and graphs.",
          type: "Library",
        },
        {
          name: "Fetch API",
          detail: "Native browser API for fetching data.",
          type: "API",
        },
      ],
    },
  },
  {
    project: {
      title: "CEDT Elective",
      subtitile: "Course Selection Platform Web Application",
      description:
        "I worked on a university course selection platform as part of my CEDT elective project, focusing on the front-end development. My primary responsibility was developing the course list and course detail pages, where students can discover courses and check their eligibility. I implemented dynamic routes for course details and handled interactions like bookmarking, selecting, and removing courses using Axios for API integration. I utilized TanStack React Query for efficient data fetching and state management, specifically with useQueries and useMutation. While the interface was designed by the UX/UI team, I ensured the implementation followed their guidelines. The project was built using Next.js, with Prisma as the database ORM and Docker to manage the database locally. For components, I used NextUI and Lucide Icons, which significantly improved development speed. This project presented challenges, as it was my first time working with tools like Next.js, Prisma, Docker, and TanStack Query, but I learned a lot about API integration, state management, and handling dynamic routes in a large-scale application. Additionally, the platform supports a company side where agents can create and manage courses, though my focus was solely on the student-facing functionality.",
      type: "project",
      tools: [
        {
          name: "Next.js",
          detail: "Framework for React applications with SSR and API routes",
          type: "Framework",
        },
        {
          name: "Prisma",
          detail: "ORM for database management and schema migration",
          type: "Dependency",
        },
        {
          name: "Axios",
          detail: "HTTP client for API integration",
          type: "Dependency",
        },
        {
          name: "TanStack React Query",
          detail: "Data fetching and state management library for React",
          type: "Dependency",
        },
        {
          name: "NextUI",
          detail:
            "UI component library to build beautiful and responsive interfaces",
          type: "Library",
        },
        {
          name: "Lucide Icons",
          detail: "Icon library for modern and customizable icons",
          type: "Library",
        },
        {
          name: "React Hot Toast",
          detail:
            "Notifications library for clean and customizable toast messages",
          type: "Library",
        },
        {
          name: "Docker",
          detail: "Containerization tool to manage and run databases locally",
          type: "Tool",
        },
      ],
    },
  },
];
