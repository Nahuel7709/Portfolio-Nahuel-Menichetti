import { Link } from "react-router-dom";
import about from "/assets/svgs/about.svg";
import contact from "/assets/svgs/contact.svg";
import education from "/assets/svgs/education.svg";
import projects from "/assets/svgs/projects.svg";
import home from "/assets/svgs/home.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-center sticky top-0">
      <ul className="inline-flex animate__animated animate__fadeIn justify-center items-center gap-3 mt-10 md:flex-row p-5 rounded-xl  backdrop-blur-sm bg-slate-500/10">
        <li>
          <Link to="/" className="custom-hover flex items-center">
            <span className="hidden md:flex text-slate-700 transition-transform duration-300 transform hover:scale-125 hover:rotate-6">
              Home
            </span>
            <img src={home} alt="Home logo" className="w-10 md:hidden" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="custom-hover flex items-center">
            <span className="hidden md:flex text-slate-700 transition-transform duration-300 transform hover:scale-125 hover:rotate-6">
              About Me
            </span>
            <img src={about} alt="About logo" className="w-10 md:hidden" />
          </Link>
        </li>
        <li>
          <Link to="/projects" className="custom-hover flex items-center">
            <span className="hidden md:flex text-slate-700 transition-transform duration-300 transform hover:scale-125 hover:rotate-6">
              Projects
            </span>
            <img
              src={projects}
              alt="Projects logo"
              className="w-10 md:hidden"
            />
          </Link>
        </li>
        <li>
          <Link to="/education" className="custom-hover flex items-center">
            <span className="hidden md:flex text-slate-700 transition-transform duration-300 transform hover:scale-125 hover:rotate-6">
              Education
            </span>
            <img
              src={education}
              alt="Education logo"
              className="w-12 md:hidden"
            />
          </Link>
        </li>
        <li>
          <Link to="/contact" className="custom-hover flex items-center">
            <span className="hidden md:flex text-slate-700 transition-transform duration-300 transform hover:scale-125 hover:rotate-6">
              Contact Me
            </span>
            <img src={contact} alt="Contact logo" className="w-10 md:hidden" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
