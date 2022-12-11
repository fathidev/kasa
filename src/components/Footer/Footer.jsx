import "./Footer.css";
import logoFooter from "../../assets/logoFooter.png";

function Footer() {
  // récupération de l'année en cours
  const actualYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoFooter} alt="Logo Kasa Footer" />
        </div>
        <div className="footer-rights">
          <p>&copy; {actualYear} Kasa. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
