import qrcode from "../../../assets/qr-code.png";
import "./index.css";

const QRCode = () => {
  return (
    <>
      <div className="qr-code-container">
        <img src={qrcode} alt="QR Code para pagamento" />
      </div>
    </>
  );
};

export default QRCode;
