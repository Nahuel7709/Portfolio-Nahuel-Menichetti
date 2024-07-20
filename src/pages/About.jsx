import { AboutMeText } from "../components/AboutMeText";
import { MyStack } from "../components/MyStack";




export const About = () => {
  return (
    <div className="flex flex-col items-center backdrop-blur-sm bg-slate-400/10 p-10 rounded-xl w-full">
      <div className="flex flex-col md:flex-row animate__animated animate__fadeIn p-4 space-y-4 md:space-y-0 md:space-x-4">
        <AboutMeText />
        <div className="flex flex-col animate__animated animate__fadeIn">
          <MyStack />
        </div>
      </div>
    </div>
  );
};