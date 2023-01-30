import "./Navbar.css";

export default function Navbar() {

  return (
    <nav className="wrapper-nav">
      <div className="nav__item"><p className="nav__item__text"><code>Me</code></p></div>
      <div className="nav__item"><p className="nav__item__text"><code>Socials</code></p></div>
      <div className="nav__item"><p className="nav__item__text"><code>Contacts</code></p></div>
    </nav>
  );
}
