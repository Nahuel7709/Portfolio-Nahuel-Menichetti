import linkedin from "/assets/svgs/linkedin-icon.svg";
import github from '/assets/svgs/github-logo.svg';
import email from '/assets/svgs/gmail-logo.svg';


export const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row md:justify-around mb-4 animate__animated animate__fadeIn">
      <p className="text-stone-800">© Nahuel Menichetti, 2024</p>
      <div>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/nahuelmenichetti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="Linkedin logo"
                className="w-8 h-8 transition-transform duration-300 transform hover:scale-125 hover:rotate-6 "
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nahuel7709"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="Github logo"
                className="w-8 h-8 transition-transform duration-300 transform hover:scale-125 hover:rotate-6 "
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:nahuel.d.menichetti@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={email}
                alt="Github logo"
                className="w-8 h-8 transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
