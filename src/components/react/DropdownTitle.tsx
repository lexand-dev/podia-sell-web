const DropdownTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-podia-secondary text-xs font-semibold uppercase tracking-widest mb-2">
      {children}
    </h3>
  );
};

export default DropdownTitle;
