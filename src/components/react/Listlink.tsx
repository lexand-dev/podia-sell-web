import { useState } from "react";

interface Props {
  name: string;
  children: React.ReactNode;
}

const Navigation = ({ name, children }: Props) => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <button
        className="font-tiempos text-xl flex justify-between lg:hidden"
        onClick={toggleVisibility}
      >
        {name}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <p className="font-bold text-lg hidden lg:block pr-2 p-0">{name}</p>
      <div
        className={
          isHidden
            ? "hidden lg:flex flex-col lg:flex-row gap-x-4 items-center"
            : "flex flex-col lg:flex-row gap-y-3 md:gap-y-5"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Navigation;
