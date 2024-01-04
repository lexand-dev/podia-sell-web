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
    <div
      className={`${className} flex items-center justify-center font-bold my-4 py-3 rounded-full w-full text-white hover:bg-podia-primary-light px-6 text-center`}
    >
      <p>
        <a href={href} className={``}>
          {children}
        </a>
      </p>
    </div>
  );
};

export default button;
