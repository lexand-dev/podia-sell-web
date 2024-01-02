const button = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="bg-podia-primary hover:bg-podia-primary-light text-white font-bold my-5 py-2 px-4 rounded-full w-full text-center block"
    >
      {children}
    </a>
  );
};

export default button;
