// Header.js
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Rashid's <span>Portfolio</span></h1>
      <nav>
        <Link to="/">About Me</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
    </header>
  );
}

export default Header;
