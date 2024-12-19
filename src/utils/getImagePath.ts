import { ImagePath } from "../assets/mockData";

export function getImagePath(folder: string): Array<string> {
  if (folder === ImagePath.moneyManagement) {
    return Object.keys(
      import.meta.glob("/src/assets/image/money-management/*.png"),
    );
  }
  return [];
}
