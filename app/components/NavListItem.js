import { v4 as uuidv4 } from "uuid";
import { HEADER_DETAILS } from "@/config/static-data";

export function NavListItem() {
  const listItems = HEADER_DETAILS.navMenu.map((item) => (
    <li key={uuidv4()}>
      <a href={item.navUrl}>{item.navText}</a>
    </li>
  ));
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4 items-center">{listItems}</div>
    </div>
  );
}
