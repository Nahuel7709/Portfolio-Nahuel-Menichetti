import html from "/assets/svgs/html-5.svg";
import css from "/assets/svgs/css-3.svg";
import javascript from "/assets/svgs/javascript.svg";
import node from "/assets/svgs/node-js.svg";
import react from "/assets/svgs/react.svg";
import postgresql from "/assets/svgs/postgresql.svg";
import tailwind from "/assets/svgs/tailwind.svg";
import python from "/assets/svgs/python.svg";
import mongodb from "/assets/svgs/mongodb.svg";
import typescript from "/assets/svgs/typescript.svg";
import nextjs from "/assets/svgs/nextjs.svg";
import bootstrap from "/assets/svgs/bootstrap.svg";

export const MyStack = () => {
  return (
    <>
      <h1 className="text-indigo-500 text-2xl pb-3 mb-3 mt-3 md:mt-0">
        My Stack
      </h1>
      <div className="flex flex-col animate__animated animate__bounce">
        <div className="flex flex-row gap-3 mb-6">
          <div className="relative group">
            <img src={javascript} alt="Javascript" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Javascript
            </span>
          </div>
          <div className="relative group">
            <img src={react} alt="React" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              React
            </span>
          </div>
          <div className="relative group">
            <img src={typescript} alt="Typescript" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Typescript
            </span>
          </div>
          <div className="relative group">
            <img src={node} alt="NodeJS" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              NodeJS
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-3 mb-6">
          <div className="relative group">
            <img src={python} alt="Python" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Python
            </span>
          </div>
          <div className="relative group">
            <img src={nextjs} alt="NextJS" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              NextJS
            </span>
          </div>
          <div className="relative group">
            <img src={postgresql} alt="Postgresql" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Postgresql
            </span>
          </div>
          <div className="relative group">
            <img src={mongodb} alt="MongoDB" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              MongoDB
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="relative group">
            <img src={tailwind} alt="Tailwind" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Tailwind
            </span>
          </div>
          <div className="relative group">
            <img src={bootstrap} alt="Bootstrap" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Bootstrap
            </span>
          </div>
          <div className="relative group">
            <img src={css} alt="CSS" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              CSS
            </span>
          </div>
          <div className="relative group">
            <img src={html} alt="HTML" className="w-8 h-8" />
            <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-xs bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              HTML
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
