import './navbar.css';
import khwaLogo from '../../assets/khwaLogo.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import Menu from './menu';


const Navbar = () => {
    return (
        <nav id='home' class="header">
            <div class="nav-logo">
                <a href='#home'><img class="img-logo" src={khwaLogo} alt='logo'/></a>
            </div>
            <Menu />
            <div class="iconos-div">
                <ul class="nav nav-underline nav-redes">
                    <li>
                        <a href="#"><img src={instagram} alt='insta'/></a>
                    </li>
                    <li>
                        <a href="#"><img src={facebook} alt='face'/></a>
                    </li>
                </ul>
            </div>
        </nav>
        
        )
    }

    export default Navbar;

    
