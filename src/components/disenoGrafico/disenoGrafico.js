import './disenoGrafico.css';
import CarouselComponent from './carrousel';
import DisenoCard from '../disenoGrafico/DisenoCard';

const DisenoGrafico = () => {
    return (
        <div id="diseno">
            <div className='bloque1'>
                <div className='historia'>
                    <h1>. ¿Cuál es TU HISTORIA? .</h1>
                    <h1>. What's YOUR HISTORY? .</h1>
                </div>
                <CarouselComponent />
            </div>
        </div>
    )
}

export default DisenoGrafico; 