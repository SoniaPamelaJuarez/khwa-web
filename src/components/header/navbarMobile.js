import Menu from "./menu";
import khwaLogo from '../../assets/khwaLogo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

const NavbarMobile = () => {
    return(
        <nav id="home-mob" className="header-mob">
            <Menu />
            <div class="nav-logo-mob">
                <a href='#home-mob'><img class="img-logo" src={khwaLogo} alt='logo'/></a>
            </div>
            <div class="iconos-div-mob">
                <ul className="ul-mob">
                    <li>
                        <a href="#"><img src={instagram} alt='servicio-digital-instagram'/></a>
                    </li>
                    <li>
                        <a href="#"><img src={facebook} alt='facebook-servicio-digital'/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarMobile;