export interface project {
  title: string;
  subtitile?: string;
  description: string;
  detail?: React.ReactNode;
  tools?: Array<string>;
  type: "project" | "competition";
  includes: Array<string>;
  highlight: boolean;
  imagesPath?: string;
}
