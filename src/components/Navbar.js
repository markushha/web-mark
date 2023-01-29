import "./Navbar.css";

export default function Navbar() {

  return (
    <nav className="wrapper-nav">
      <div className="nav__item"><p className="nav__item__text"><code>Home</code></p></div>
      <div className="nav__item"><p className="nav__item__text"><code>Social</code></p></div>
      <div className="nav__item"><p className="nav__item__text"><code>Contacts</code></p></div>
    </nav>
  );
}
