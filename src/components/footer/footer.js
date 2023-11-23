import './footer.css'
import Menu from '../header/menu';
import khwaLogo from '../../assets/khwaLogo.png';



const Footer = () => {
    const anioActual = new Date().getFullYear();
    return(
        <footer id='footer'>
            <div class='footer-div'>
                <Menu />
                <div class="nav-logo logo-footer">
                    <a href="#home"><img class="img-logo" src={khwaLogo} alt='logo'/></a>
                </div>
                <div class="cr">
                    <p>Todos los derechos reservados © {anioActual} | Khwa Plan </p>  
                </div>
            </div>
        </footer>
    )
}

export default Footer;