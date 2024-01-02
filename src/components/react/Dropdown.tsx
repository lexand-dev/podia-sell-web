interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-white">
      <div tabIndex={0} role="button" className="btn m-1">
        {title}
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
