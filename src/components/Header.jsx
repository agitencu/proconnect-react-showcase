import "./Header.css"; 

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <a href="#" className="header-logo">
          Pro<span>Connect</span>
        </a>
        
        <nav className="header-nav">
          {["Yetenekler", "Hakkımızda", "İletişim"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <button className="header-button">
          Giriş Yap
        </button>
      </div>
    </header>
  );
}