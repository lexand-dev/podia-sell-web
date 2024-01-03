const button = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex">
      <p>
        <a
          href={href}
          className={`font-bold my-4 py-3 rounded-full w-full block bg-podia-primary text-white hover:bg-podia-primary-light px-6 ${className}`}
        >
          {children}
        </a>
      </p>
    </div>
  );
};

export default button;
