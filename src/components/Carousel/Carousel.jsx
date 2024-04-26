import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css'

const CarouselComponent = (props) => {
    const {
        items,
        retornoIndiceCard
    } = props

    const retornaItemSelecionado = (indice) => {
        retornoIndiceCard(indice)
    }

    return (
        <Carousel autoPlay infiniteLoop onChange={retornaItemSelecionado} interval={4000} transitionTime={700} width={210} className='crsl' showThumbs={false} showIndicators={false}>
            {
                items.map((item, index) =>
                    <div style={{ maxHeight: '65rem' }} key={index} className="zoom">
                        <img src={`${item.card_images[0].image_url_cropped}`} height={412} alt='Card'/>
                        <p className="legend">{item.name}</p>
                    </div>
                )
            }
        </Carousel>
    );
}

export default CarouselComponent;