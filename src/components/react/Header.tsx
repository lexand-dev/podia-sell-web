import Logo from "@components/icons/Logo.tsx";
import Button from "./Button";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import DropdownTitle from "./DropdownTitle";
import Link from "./Link";

const Header = () => {
  return (
    <header
      className="
      bg-podia
      flex items-center
      flex-row
      justify-between
      md:justify-between
      mx-auto
      py-4
      px-6
      sticky top-0
      w-full xl:w-[1120px]
      max-w-5xl lg:max-w-5xl 2xl:max-w-7xl
      z-10"
    >
      <Logo className="w-20 text-podia-primary inline-block md:pl-0" />
      <nav className="flex items-center pl-4 md:px-0">
        <a className="inline-block mr-10 sm:" href="/login">
          Login
        </a>
        <Dropdown title="Menu">
          <DropdownItem title="Website">
            <DropdownTitle>PLATFORM</DropdownTitle>
            <Link href="/about">Website builder</Link>
            <Link href="/about">Website examples</Link>
            <div className="border-b-[0.5px] border-podia-secondary mt-2 mb-4" />
            <DropdownTitle>FEATURES</DropdownTitle>
            <Link href="/about">Landing pages</Link>
            <Link href="/about">Link in bio pages</Link>
            <Link href="/about">Portfolio Website</Link>
            <Link href="/about">Integrations</Link>
          </DropdownItem>
          <DropdownItem title="Email">
            <DropdownTitle>PLATFORM</DropdownTitle>
            <Link href="/about">Website builder</Link>
            <Link href="/about">Website examples</Link>
            <div className="border-b-[0.5px] border-podia-secondary mt-2 mb-4" />
            <DropdownTitle>FEATURES</DropdownTitle>
            <Link href="/about">Landing pages</Link>
            <Link href="/about">Link in bio pages</Link>
            <Link href="/about">Portfolio Website</Link>
            <Link href="/about">Integrations</Link>
          </DropdownItem>
          <DropdownItem title="Sell">
            <DropdownTitle>PLATFORM</DropdownTitle>
            <Link href="/about">Website builder</Link>
            <Link href="/about">Website examples</Link>
            <div className="border-b-[0.5px] border-podia-secondary mt-2 mb-4" />
            <DropdownTitle>FEATURES</DropdownTitle>
            <Link href="/about">Landing pages</Link>
            <Link href="/about">Link in bio pages</Link>
            <Link href="/about">Portfolio Website</Link>
            <Link href="/about">Integrations</Link>
          </DropdownItem>
          <Link
            className="font-headland pl-4 my-4 block font-normal text-xl"
            href="/about"
          >
            Pricing
          </Link>
          <DropdownItem title="Resources">
            <DropdownTitle>PLATFORM</DropdownTitle>
            <Link href="/about">Website builder</Link>
            <Link href="/about">Website examples</Link>
            <div className="border-b-[0.5px] border-podia-secondary mt-2 mb-4" />
            <DropdownTitle>FEATURES</DropdownTitle>
            <Link href="/about">Landing pages</Link>
            <Link href="/about">Link in bio pages</Link>
            <Link href="/about">Portfolio Website</Link>
            <Link href="/about">Integrations</Link>
          </DropdownItem>
          <Button className="bg-podia-primary" href="/signup">
            Sign up free
          </Button>
        </Dropdown>
      </nav>
    </header>
  );
};

export default Header;
