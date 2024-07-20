import { Link, useLocation } from "react-router-dom";
import about from "/assets/svgs/about.svg";
import contact from "/assets/svgs/contact.svg";
import education from "/assets/svgs/education.svg";
import projects from "/assets/svgs/projects.svg";
import home from "/assets/svgs/home.svg";

export const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-indigo-500 flex items-center"
      : "text-slate-700 flex items-center";
  };

  const getIconClass = (path) => {
    return location.pathname === path
      ? "bg-indigo-500 rounded-lg p-2 shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
      : "transition duration-300 ease-in-out transform hover:scale-110";
  };

  return (
    <div className="flex justify-center sticky top-0 z-50">
      <ul className="inline-flex animate__animated animate__fadeIn justify-center items-center gap-3 mt-10 md:flex-row p-5 rounded-xl bg-slate-500/10">
        <li>
          <Link to="/" className={getLinkClass("/")}>
            <span
              className={`hidden md:flex transition-transform duration-300 transform ${
                location.pathname === "/" ? "text-indigo-500" : "text-slate-700"
              } hover:scale-125 hover:rotate-6`}
            >
              Home
            </span>
            <img
              src={home}
              alt="Home logo"
              className={`w-10 md:hidden ${getIconClass("/")}`}
            />
          </Link>
        </li>
        <li>
          <Link to="/about" className={getLinkClass("/about")}>
            <span
              className={`hidden md:flex transition-transform duration-300 transform ${
                location.pathname === "/about"
                  ? "text-indigo-500"
                  : "text-slate-700"
              } hover:scale-125 hover:rotate-6`}
            >
              About Me
            </span>
            <img
              src={about}
              alt="About logo"
              className={`w-10 md:hidden ${getIconClass("/about")}`}
            />
          </Link>
        </li>
        <li>
          <Link to="/projects" className={getLinkClass("/projects")}>
            <span
              className={`hidden md:flex transition-transform duration-300 transform ${
                location.pathname === "/projects"
                  ? "text-indigo-500"
                  : "text-slate-700"
              } hover:scale-125 hover:rotate-6`}
            >
              Projects
            </span>
            <img
              src={projects}
              alt="Projects logo"
              className={`w-10 md:hidden ${getIconClass("/projects")}`}
            />
          </Link>
        </li>
        <li>
          <Link to="/education" className={getLinkClass("/education")}>
            <span
              className={`hidden md:flex transition-transform duration-300 transform ${
                location.pathname === "/education"
                  ? "text-indigo-500"
                  : "text-slate-700"
              } hover:scale-125 hover:rotate-6`}
            >
              Education
            </span>
            <img
              src={education}
              alt="Education logo"
              className={`w-10 md:hidden ${getIconClass("/education")}`}
            />
          </Link>
        </li>
        <li>
          <Link to="/contact" className={getLinkClass("/contact")}>
            <span
              className={`hidden md:flex transition-transform duration-300 transform ${
                location.pathname === "/contact"
                  ? "text-indigo-500"
                  : "text-slate-700"
              } hover:scale-125 hover:rotate-6`}
            >
              Contact Me
            </span>
            <img
              src={contact}
              alt="Contact logo"
              className={`w-10 md:hidden ${getIconClass("/contact")}`}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};
