export interface project {
  title: string;
  subtitile?: string;
  description: string;
  detail?: React.ReactNode;
  tools?: Array<projectTool>;
  type: "project" | "competition";
  status: Array<string>;
  highlight: boolean;
}
interface projectTool {
  name: string;
  detail: string;
  type: string;
}
