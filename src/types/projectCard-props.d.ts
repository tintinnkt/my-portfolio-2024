export interface ProjectCardProps {
  project: project;
}
interface project {
  title: string;
  subtitile?: string;
  description: string;
  detail?: React.ReactNode;
  tools?: Array<projectTool>;
  type: "project" | "competition";
}
interface projectTool {
  name: string;
  detail: string;
  type: string;
}