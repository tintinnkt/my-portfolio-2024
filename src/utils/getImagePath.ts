import { ImagePath } from "@/assets/mockData";

// Helper function to generate the image paths
function generateImagePaths(basePath: string, imageNames: Array<string>): Array<string> {
  return imageNames.map((imageName) => basePath + imageName);
}

export function getImagePath(folder: string): Array<string> {
  if (folder === ImagePath.moneyManagement) {
    return generateImagePaths(ImagePath.moneyManagement, [
      "adding.png",
      "debt.png",
      "history.png",
      "home.png",
      "login.png",
      "profile.png",
      "savings.png",
    ]);
  } else if (folder === ImagePath.cedtElective) {
    return generateImagePaths(ImagePath.cedtElective, [
      "admin-view.png",
      "course-list-phone.png",
      "docker-deploy.png",
      "student-view.png",
    ]);
  }

  return [];
}
