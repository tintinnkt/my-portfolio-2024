export interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  description: string;
  aboutMe: string;
  tags?: Array<string>;
  githubLink?: string;
  linkedinLink?: string;
}
