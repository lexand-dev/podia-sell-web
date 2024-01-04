interface DropdownProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, className }) => {
  return (
    <div className={`dropdown dropdown-bottom dropdown-end ${className}`}>
      <div
        tabIndex={0}
        role="button"
        className="flex justify-center items-center text-center px-4 m-1 bg-podia"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow w-72 bg-white"
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
