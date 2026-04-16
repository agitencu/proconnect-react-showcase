import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section-brand">
          <h3 className="footer-logo">ProConnect</h3>
          <p className="footer-text">
            Dünyanın her yerinden profesyonelleri bir araya getiren, React ile güçlendirilmiş yetenek platformu.
          </p>
        </div>

        <div className="footer-section-links">
          <h4 className="footer-heading">Hızlı Linkler</h4>
          <ul className="footer-link-list">
            <li>Göz At</li>
            <li>Topluluk</li>
            <li>Şirketler</li>
          </ul>
        </div>

        <div className="footer-section-social">
          <h4 className="footer-heading">Bizi Takip Edin</h4>
          <div className="footer-social-icons">
            <span>LinkedIn</span>
            <span>GitHub</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 ProConnect Global. Tüm hakları saklıdır. | React Öğrenme Yolculuğu Projesi
      </div>
    </footer>
  );
}