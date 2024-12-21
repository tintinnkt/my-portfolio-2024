export const techStackMapping: Record<
  string,
  { description: string; type: string }
> = {
  React: {
    description: "A JavaScript library for building user interfaces.",
    type: "Library",
  },
  "React DOM": {
    description: "Provides DOM-specific methods for React.",
    type: "Library",
  },
  "React Router DOM": {
    description: "Declarative routing for React applications.",
    type: "Library",
  },
  Firebase: {
    description:
      "A Platform-as-a-Service (PaaS) platform for web and mobile application development, offering real-time databases, authentication, and more.",
    type: "PaaS", // More specific type
  },
  "Vite.js": {
    description:
      "A fast build tool and development server for modern web projects.",
    type: "Build Tool",
  },
  TypeScript: {
    description:
      "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
    type: "Language",
  },
  ESLint: {
    description:
      "A static code analysis tool for identifying and reporting on patterns found in ECMAScript/JavaScript/TypeScript code.",
    type: "Linting Tool", // More specific
  },
  Prettier: {
    description:
      "An opinionated code formatter that enforces a consistent style.",
    type: "Formatter", // More specific
  },
  "Prisma Client": {
    description:
      "A type-safe ORM for Node.js and TypeScript that simplifies database access.",
    type: "ORM",
  },
  Axios: {
    description:
      "A promise-based HTTP client for making HTTP requests from Node.js or the browser.",
    type: "Library",
  },
  "Next.js": {
    description:
      "React framework that provides a more complete solution for building web application.",
    type: "Framework",
  },
  "NextAuth.js": {
    description:
      "An authentication library for Next.js applications, supporting various providers like OAuth, email, and credentials.",
    type: "Library",
  },
  NextUI: {
    description:
      "A React UI library focused on developer experience and customization.",
    type: "UI Library",
  },
  "Framer Motion": {
    description:
      "A production-ready motion library for React that simplifies creating animations and gestures.",
    type: "Library",
  },
  "React Icons": {
    description:
      "A library that provides a wide range of icons as React components.",
    type: "Library",
  },
  "Class-Variance-Authority": {
    description:
      "A utility for constructing class names conditionally based on component variants.",
    type: "Library",
  },
  "Tailwind CSS": {
    description:
      "A utility-first CSS framework for rapidly styling HTML elements.",
    type: "CSS Framework",
  },
  PostCSS: {
    description:
      "A tool for transforming CSS with JavaScript plugins, enabling features like autoprefixing and future CSS syntax.",
    type: "Tool",
  },
  "React-Bootstrap": {
    description:
      "React components that implement the Bootstrap styling and layout system.",
    type: "UI Library",
  },
  "React-Datepicker": {
    description: "A customizable date picker component for React applications.",
    type: "Component", // More accurate
  },
  "React Google Charts": {
    description:
      "A React wrapper for Google Charts, allowing you to easily embed charts and graphs.",
    type: "Library",
  },
  "React Google Login": {
    description:
      "A React component for integrating Google Sign-In into your applications.",
    type: "Component", // More accurate
  },
  Bootstrap: {
    description:
      "A popular CSS framework for developing responsive and mobile-first websites.",
    type: "CSS Framework",
  },
  "Bootstrap Icons": {
    description:
      "A free, high-quality icon set designed for use with Bootstrap.",
    type: "Icon Set",
  },
  "Date-fns": {
    description:
      "A modern JavaScript utility library for manipulating dates and times.",
    type: "Library",
  },
  "ค่าย 2": {
    description:
      "ผ่านการอบรมในโครงการโอลิมปิกวิชาการ สาขาวิชาคอมพิวเตอร์ค่าย 2",
    type: "none",
  },
  "Data Structure": {
    description:
      "Way of organizing and storing data in a computer so that it can be accessed and used efficiently.",
    type: "none",
  },
  "C++": {
    description:
      "Cross-platform language that can be used to create high-performance applications.",
    type: "Language",
  },
};
