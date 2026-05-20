import { TextAlignJustify } from "lucide-react";
import { useLocation } from "react-router-dom";

function Header({ setOffCanvas }) {
  let heading = "";
  const location = useLocation();

  switch (location.pathname) {
    case "/u/":
      heading = "Overview";
      break;
    case "/u/blogs":
      heading = "Manage Blogs";
      break;
    case "/u/add":
      heading = "Create Blogs";
      break;
    case "/u/settings":
      heading = "Settings";
      break;
    case "/u/profile":
      heading = "Your Profile";
      break;

    default:
      heading = "Default";
      break;
  }

  return (
    <div className="bg-white/80 shadow-md h-20">
      <div className="container-v2 flex items-center justify-between h-full">
        <div className="flex items-center gap-3">
          <TextAlignJustify
            className="text-neutral-700"
            onClick={() => setOffCanvas(true)}
          />
          <h1 className="text-xl font-medium text-neutral-700">{heading}</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
