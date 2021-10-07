import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Img
} from './Navbar.js';
import Logo from '../../assets/images/logo.svg'
import BurgerMenu from './BurgerMenu'

const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};

export default function NavBar() {
  return (
      <Nav>
       
        <NavLink to='/' activeStyle>
          <Img src={Logo} alt='logo' />Blog      
        </NavLink>
        <BurgerMenu/>

        <NavMenu>
          <NavLink to='/about' activeStyle>
            About us
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Join Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Log in</NavBtnLink>
        </NavBtn>
      </Nav>
  );
}

