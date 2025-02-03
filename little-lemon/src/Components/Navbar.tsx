import logo from '../Images/icons/Logo.svg';

const Navbar = () => {
  return (
    <header>
      <nav className="nav_wrapper">
        <div className="nav_container">
          <div className="logo_container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="links_container">
            <ul>
              <li>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Reservations</a>
                <a href="">Order Online</a>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
