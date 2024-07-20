import { MainButtons } from "./MainButtons";

const splitTextWithHover = (text) => {
  return text.split("").map((char, index) => (
    <span
      key={index}
      className="transition-colors duration-300 ease-in-out hover:text-indigo-500 cursor-default"
    >
      {char}
    </span>
  ));
};

export const MainTitle = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center animate__animated animate__fadeIn backdrop-blur-sm bg-slate-400/10 p-10 rounded-xl w-full">
        <p className="text-stone-800">Buenos Aires, Argentina</p>
        <h1 className="text-[9vw] animate__animated animate__fadeIn text-stone-800 md:text-[5vw]">
          {splitTextWithHover("Nahuel Menichetti")}
        </h1>
        <p className="text-[6vw] animate__animated animate__fadeIn text-stone-800 md:text-[3vw]">
          <span className="text-indigo-500">{"Front-End"}</span> Developer
        </p>
        <MainButtons />
      </div>
    </>
  );
};
