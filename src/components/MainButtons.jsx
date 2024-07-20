import { BlackButton } from "../ui/BlackButton";




export const MainButtons = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row m-10 animate-fadeInRight">
      <a
        href="/CV-Nahuel-Menichetti-EN.pdf"
        download="CV-Nahuel-Menichetti-EN.pdf"
      >
        <BlackButton text="Download CV" />
      </a>
    </div>
  );
}
