
import { useState } from 'react'
import './Library.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import levelImg from '../../img/level.png'
import shieldSVG from '../../img/icons8-shield-50.png'
import cartaVazia from '../../img/carta-vazia.jpg'

import sword from '../../img/sword-duotone-svgrepo-com.svg'

import SellIcon from '@mui/icons-material/Sell';
import AttributionIcon from '@mui/icons-material/Attribution';
import BasicModal from '../Modal/Modal';
import Slider from '../Slider/Slider';

const LibraryComponent = (props) => {
    const {
        cards
    } = props

    const [cartaSelecionada, setCartaSelecionada] = useState({})

    const handleSelectCard = (card) => {
        setCartaSelecionada(card)
    }
    console.log(cartaSelecionada);
    return (
        <section className='container-explore'>
            <section className='info-section'>
                {Object.keys(cartaSelecionada).length !== 0 ?
                    <div className='info-card'>
                        <div className='card-img-info'>
                            <BasicModal
                                botao={cartaSelecionada.card_images[0].image_url_small}
                                conteudo={cartaSelecionada.card_images[0].image_url}
                                largura={380}
                            />
                            <div className='info-wrapper'>
                                <div className='library-card-select-title'>
                                    <h3>{cartaSelecionada.name}</h3>
                                </div>
                                <div className='library-card-select'>
                                    <ul className='grid-info-card'>
                                        {cartaSelecionada.type &&
                                            <li>
                                                <span className='span'>Type</span>
                                                <div>
                                                    <MenuBookIcon sx={{ width: '1.6rem' }} /><span>{cartaSelecionada.type}</span>
                                                </div>
                                            </li>
                                        }
                                        {cartaSelecionada.attribute &&
                                            <li>
                                                <span className='span'>Attribute</span>
                                                <div>
                                                    <SellIcon sx={{ width: '1.6rem' }} /><span>{cartaSelecionada.attribute}</span>
                                                </div>
                                            </li>
                                        }
                                        {cartaSelecionada.archetype &&
                                            <li>
                                                <span className='span'>Archetype</span>
                                                <div>
                                                    <SellIcon sx={{ width: '1.6rem' }} /><span>{cartaSelecionada.archetype}</span>
                                                </div>
                                            </li>
                                        }
                                        {cartaSelecionada.race &&
                                            <li>
                                                <span className='span'>Typing</span>
                                                <div>
                                                    <AttributionIcon sx={{ width: '1.6rem' }} /><span>{cartaSelecionada.race}</span>
                                                </div>
                                            </li>
                                        }
                                        {cartaSelecionada.level &&
                                            <li>
                                                <span className='span'>Level</span>
                                                <div>
                                                    <img src={levelImg} width={16} style={{ marginRight: '3px' }} /><span>{cartaSelecionada.level}</span>
                                                </div>
                                            </li>
                                        }
                                        {cartaSelecionada.atk && cartaSelecionada.atk > 0 &&
                                            <li>
                                                <span className='span'>Atk</span>
                                                <div>
                                                    <img src={sword} width={20} /><span>{cartaSelecionada.atk}</span>
                                                </div>
                                            </li>
                                        }
                                        {cartaSelecionada.def && cartaSelecionada.def > 0 &&
                                            <li>
                                                <span className='span'>Def</span>
                                                <div>
                                                    <img src={shieldSVG} width={22} /><span>{cartaSelecionada.def}</span>
                                                </div>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='p-info-card'>
                            <p>{cartaSelecionada.desc}</p>
                        </div>
                    </div>
                    :
                    <div className='info-card-empty'>
                        <img src={cartaVazia} width={300} />
                    </div>
                }
            </section>

            <section className='container-library'>
                <div className='library-div'>
                    <div className='filter-card'>
                        <label>
                            <span> Name</span>
                            <input />
                        </label>
                        <label>
                            <span>Attribute</span>
                            <input />
                        </label>
                        <label>
                            <span>Archetype</span>
                            <input />
                        </label>
                        <label>
                            <span>Race/Typing</span>
                            <input />
                        </label>
                        <label>
                            <span>Level</span>
                            <Slider />
                        </label>
                    </div>
                    <div className='grid-library'>

                        {cards.map(item =>
                            <div className='card-library' onClick={() => handleSelectCard(item)}>
                                <img src={item.card_images[0].image_url_small} width={80} />
                            </div>

                        )}
                    </div>
                </div>

            </section>

        </section>
    );
}

export default LibraryComponent;