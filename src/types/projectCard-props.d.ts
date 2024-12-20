export interface project {
  title: string;
  subtitile?: string;
  description: string;
  detail?: React.ReactNode;
  tools?: Array<string>;
  type: "project" | "competition";
  highlight: boolean;
  imagesPath?: string;
}
