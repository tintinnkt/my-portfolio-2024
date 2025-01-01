export interface Project {
  title: string;
  subtitile?: string;
  description: string;
  detail?: React.ReactNode;
  tools?: Array<string>;
  type: "project" | "competition";
  highlight: boolean;
  imagesPath?: string;
  link?: string;
  gihubLink?: string;
}
