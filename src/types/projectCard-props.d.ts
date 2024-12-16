export interface ProjectCardProps {
  project: project;
  isFooterBlurred?: boolean;
}
export interface project {
  title: string;
  description: string;



  
  detail?: React.ReactNode;
  startIcon: React.ReactNode;




}
