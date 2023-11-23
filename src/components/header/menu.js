import './navbar.css';
import menuHambur from '../../assets/menuHambur.png';


const Menu = () => {
    return (
        <div class="nav-div">
            <ul class="nav nav-underline">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#home">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#servicios">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contacto">Contacto</a>
                    </li>
            </ul>
            
            {/*menu desplegable para mobile */}
            <div class="dropdown menuMobile">
                <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src={menuHambur} alt='estrategiadigital'/></button>
                <ul class="dropdown-menu">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#home-mob">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;