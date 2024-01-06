import Logo from "@components/icons/Logo.tsx";
import "../../styles/utils.css";
import Button from "./Button";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import DropdownTitle from "./DropdownTitle";
import Link from "./Link";

const Header = () => {
  return (
    <header
      id="header-nav"
      className="
      sticky top-0
      w-full
      lg:max-w-6xl
      xl:max-w-full 
      z-10
      "
    >
      <div
        className="
        flex items-center flex-row
        justify-between
        md:justify-between
        py-4
        px-5
        box-content 
        mx-auto 
        max-w-5xl 
        lg:max-w-6xl
        xl:max-w-7xl
        "
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
              className="font-tiempos pl-4 my-4 block font-normal text-xl"
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
      </div>
    </header>
  );
};

export default Header;
