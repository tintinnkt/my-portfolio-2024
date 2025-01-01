import { ImagePath } from "@/assets/mockData";

export function getImagePath(folder: string): Array<string> {

  if (folder === ImagePath.moneyManagement) {
    return [
      ImagePath.moneyManagement + "adding.png",
      ImagePath.moneyManagement + "debt.png",
      ImagePath.moneyManagement + "history.png",
      ImagePath.moneyManagement + "home.png",
      ImagePath.moneyManagement + "login.png",
      ImagePath.moneyManagement + "profile.png",
      ImagePath.moneyManagement + "savings.png",
    ];
  } else if (folder === ImagePath.cedtElective) {
    return [
      ImagePath.cedtElective + "admin-view.png",
      ImagePath.cedtElective + "course-list-phone.png",
      ImagePath.cedtElective + "docker-deploy.png",
      ImagePath.cedtElective + "student-view.png",
    ];
  }

  return [];
}
