interface DropdownItemProps {
  title: string;
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, children }) => {
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <div className="collapse-title text-xl font-normal font-tiempos">
        {title}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default DropdownItem;
