import woovi from "../../../assets/woovi.svg";
import "./index.css";

const Header = () => {
  return (
    <header className="flex-center">
      <a href="https://react.dev" target="_blank">
        <img src={woovi} className="logo woovi" alt="Woovi logo" />
      </a>
    </header>
  );
};

export default Header;
