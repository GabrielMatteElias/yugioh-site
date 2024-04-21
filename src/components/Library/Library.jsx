
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
import Select from '../Select/Select';

const LibraryComponent = (props) => {
    const {
        cards,
        archetypes
    } = props

    const formatarArchetypes = archetypes.map(item => ({
        label: item.archetype_name,
        value: item.archetype_name
    }));

    const [cartaSelecionada, setCartaSelecionada] = useState({})
    const [girarCarta, setGirarCarta] = useState('');

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [frameType, setFrameType] = useState('');
    const [archetype, setArchetypes] = useState('');
    const [race, setRace] = useState('');

    const [level, setLevel] = useState(null);

    const handleSelectCard = (card) => {
        setCartaSelecionada(card)
        setGirarCarta('')
        setTimeout(() => {
            setGirarCarta('selected')
        }, 1)
    }

    const dados = [
        {
            label: 'Mago', value: 'mago'
        },
        {
            label: 'Orc', value: 'orc'
        }
    ]

    // console.log('nome', nome);
    // console.log('atributo', frameType);
    console.log('arquetipo', archetype);
    // console.log('tipo', tipo);
    // console.log('level', level);
    // console.log(cartaSelecionada);

    const padronizarLetras = (palavra) => {
        if (palavra && typeof palavra === 'string') {
            const palavraFormatada = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
            return palavraFormatada
        }
        return '-'
    }

    return (
        <section className='container-explore'>
            <section className='info-section'>
                {Object.keys(cartaSelecionada).length !== 0 ?
                    <div className='info-card'>
                        <div className='card-img-info'>
                            <BasicModal
                                botao={cartaSelecionada.card_images[0].image_url_small}
                                conteudo={cartaSelecionada.card_images[0].image_url}
                                classe={girarCarta}
                            />
                            <div className='info-wrapper'>
                                <div className='library-card-select-title'>
                                    <h3>{cartaSelecionada.name_en}</h3>
                                </div>
                                <div className='library-card-select'>
                                    <ul className='grid-info-card'>
                                        <li className='card-list'>
                                            <span className='span'>Type</span>
                                            <div>
                                                <MenuBookIcon sx={{ width: '1.6rem' }} />
                                                <span style={{ paddingLeft: cartaSelecionada.type ? '0' : '7rem' }}>{cartaSelecionada.type ? padronizarLetras(cartaSelecionada.type) : '-'}</span>
                                            </div>
                                        </li>
                                        <li className='card-list'>
                                            <span className='span'>FrameType</span>
                                            <div>
                                                <MenuBookIcon sx={{ width: '1.6rem' }} />
                                                <span style={{ paddingLeft: cartaSelecionada.type ? '0' : '7rem' }}>{cartaSelecionada.frameType ? padronizarLetras(cartaSelecionada.frameType) : '-'}</span>
                                            </div>
                                        </li>
                                        <li className='card-list'>
                                            <span className='span'>Attribute</span>
                                            <div>
                                                <SellIcon sx={{ width: '1.6rem' }} />
                                                <span style={{ paddingLeft: cartaSelecionada.attribute ? '0' : '7rem' }}>{cartaSelecionada.attribute ? padronizarLetras(cartaSelecionada.attribute) : '-'}</span>
                                            </div>
                                        </li>
                                        <li className='card-list'>
                                            <span className='span'>Archetype</span>
                                            <div>
                                                <SellIcon sx={{ width: '1.6rem' }} />
                                                <span style={{ paddingLeft: cartaSelecionada.archetype ? '0' : '7rem' }}>{cartaSelecionada.archetype ? padronizarLetras(cartaSelecionada.archetype) : '-'}</span>
                                            </div>
                                        </li>
                                        <li className='card-list'>
                                            <span className='span'>Race/Typing</span>
                                            <div>
                                                <AttributionIcon sx={{ width: '1.6rem' }} />
                                                <span style={{ paddingLeft: cartaSelecionada.race ? '0' : '7rem' }}>{cartaSelecionada.race ? padronizarLetras(cartaSelecionada.race) : '-'}</span>
                                            </div>
                                        </li>
                                        <div>

                                            <li>
                                                <span className='span'>ATK</span>
                                                <div>
                                                    <img alt='atk icon' src={sword} width={20} />
                                                    <span style={{ paddingLeft: cartaSelecionada.atk ? '0' : '7rem' }}>{cartaSelecionada.atk ? cartaSelecionada.atk : '-'}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className='span'>Def</span>
                                                <div style={{ paddingLeft: 0}}>
                                                    <img alt='def icon' src={shieldSVG} width={22} />
                                                    <span>{cartaSelecionada.atk ? cartaSelecionada.atk : '-'}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className='span' style={{ color: '' }}>Level</span>
                                                <div>
                                                    <img alt='level icon' src={levelImg} width={16} style={{ marginRight: '3px' }} />
                                                    <span style={{ paddingLeft: cartaSelecionada.level ? '0' : '7rem' }}>{cartaSelecionada.level ? cartaSelecionada.level : '-'}</span>
                                                </div>
                                            </li>
                                        </div>
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
                        <img src={cartaVazia} width={300} alt='empty card' />
                    </div>
                }
            </section>

            <section className='container-library'>
                <div className='library-div'>
                    <div className='filter-card'>
                        <label>
                            <span> Name</span>
                            <input type='text' onChange={(e) => setNome(e.target.value)} />
                        </label>
                        <label>
                            <span>Type</span>
                            <Select dados={dados} setValor={setTipo} valor={tipo} />
                        </label>
                        <label>
                            <span>Attribute</span>
                            <Select dados={dados} setValor={setFrameType} valor={frameType} />
                        </label>
                        <label>
                            <span>Archetype</span>
                            <Select dados={formatarArchetypes} setValor={setArchetypes} valor={archetype} />
                        </label>
                        <label>
                            <span>Race/Typing</span>
                            <Select dados={dados} setValor={setRace} valor={race} />
                        </label>
                        <label>
                            <span>Level</span>
                            <Slider />
                        </label>
                    </div>
                    <div className='grid-library'>

                        {cards.map(item =>
                            <div key={item.id} className='card-library' onClick={() => handleSelectCard(item)}>
                                <img src={item.card_images[0].image_url_small} width={100} alt='card' />
                            </div>

                        )}
                    </div>
                </div>

            </section>

        </section>
    );
}

export default LibraryComponent;