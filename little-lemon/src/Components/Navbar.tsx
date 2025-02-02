import '../dist/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <div className="logo-container">
          <img src="" alt="" />
        </div>
        <ul className='nav-links'>
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
    </nav>
  );
};

export default Navbar;
