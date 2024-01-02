interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props) => {
  return (
    <a className="text-sm mb-2" {...props}>
      {props.children}
    </a>
  );
};

export default Link;
