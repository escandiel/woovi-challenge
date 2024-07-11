import "./index.css";
import wooviFooter from "../../../assets/woovi-footer.svg";
import safetyIcon from "../../../assets/safety-icon.svg";

const Footer = () => {
  return (
    <div className="flex-center footer ">
      <img src={safetyIcon} className="safety-icon-footer" />
      <span className="footer-text-span">Pagamento 100% seguro via: </span>
      <img src={wooviFooter} className="woovi-logo-footer" />
    </div>
  );
};

export default Footer;
