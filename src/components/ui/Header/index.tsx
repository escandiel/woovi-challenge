import woovi from "../../../assets/woovi.svg";
import "./index.css";

const Header = () => {
  return (
    <header className="flex-center main-header">
      <a href="https://woovi.com" target="_blank">
        <img src={woovi} className="logo woovi" alt="Woovi logo" />
      </a>
    </header>
  );
};

export default Header;
