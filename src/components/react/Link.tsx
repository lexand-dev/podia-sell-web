interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ className, href, children }) => {
  return (
    <a className={`text-sm mb-2 ${className}`} href={href}>
      {children}
    </a>
  );
};

export default Link;
