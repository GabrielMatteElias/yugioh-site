
import { useEffect, useState } from 'react'
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
import Api from '../../Services/Api';
import { getRandomNumbers } from '../../Utils/DevolverItensAleatorios';
import CircularIndeterminate from '../SpinnerProgress/SpinnerProgress';

const userService = new Api()

const listaRace = [
    { label: "Aqua", value: "Aqua" },
    { label: "Beast", value: "Beast" },
    { label: "Beast-Warrior", value: "Beast-Warrior" },
    { label: "Creator-God", value: "Creator-God" },
    { label: "Cyberse", value: "Cyberse" },
    { label: "Dinosaur", value: "Dinosaur" },
    { label: "Divine-Beast", value: "Divine-Beast" },
    { label: "Dragon", value: "Dragon" },
    { label: "Fairy", value: "Fairy" },
    { label: "Fiend", value: "Fiend" },
    { label: "Fish", value: "Fish" },
    { label: "Insect", value: "Insect" },
    { label: "Machine", value: "Machine" },
    { label: "Plant", value: "Plant" },
    { label: "Psychic", value: "Psychic" },
    { label: "Pyro", value: "Pyro" },
    { label: "Reptile", value: "Reptile" },
    { label: "Rock", value: "Rock" },
    { label: "Sea Serpent", value: "Sea Serpent" },
    { label: "Spellcaster", value: "Spellcaster" },
    { label: "Thunder", value: "Thunder" },
    { label: "Warrior", value: "Warrior" },
    { label: "Winged Beast", value: "Winged Beast" },
    { label: "Wyrm", value: "Wyrm" },
    { label: "Zombie", value: "Zombie" },
    { label: "Normal", value: "Normal" },
    { label: "Field", value: "Field" },
    { label: "Equip", value: "Equip" },
    { label: "Quick-Play", value: "Quick-Play" },
    { label: "Ritual", value: "Ritual" },
    { label: "Continuous", value: "Continuous" },
    { label: "Counter", value: "Counter" }
]

const listaType = [
    { label: "Effect Monster", value: "Effect Monster" },
    { label: "Flip Effect Monster", value: "Flip Effect Monster" },
    { label: "Flip Tuner Effect Monster", value: "Flip Tuner Effect Monster" },
    { label: "Gemini Monster", value: "Gemini Monster" },
    { label: "Normal Monster", value: "Normal Monster" },
    { label: "Normal Tuner Monster", value: "Normal Tuner Monster" },
    { label: "Pendulum Effect Monster", value: "Pendulum Effect Monster" },
    { label: "Pendulum Effect Ritual Monster", value: "Pendulum Effect Ritual Monster" },
    { label: "Pendulum Flip Effect Monster", value: "Pendulum Flip Effect Monster" },
    { label: "Pendulum Normal Monster", value: "Pendulum Normal Monster" },
    { label: "Pendulum Tuner Effect Monster", value: "Pendulum Tuner Effect Monster" },
    { label: "Ritual Effect Monster", value: "Ritual Effect Monster" },
    { label: "Ritual Monster", value: "Ritual Monster" },
    { label: "Spell Card", value: "Spell Card" },
    { label: "Spirit Monster", value: "Spirit Monster" },
    { label: "Toon Monster", value: "Toon Monster" },
    { label: "Trap Card", value: "Trap Card" },
    { label: "Tuner Monster", value: "Tuner Monster" },
    { label: "Union Effect Monster", value: "Union Effect Monster" },
    { label: "Fusion Monster", value: "Fusion Monster" },
    { label: "Link Monster", value: "Link Monster" },
    { label: "Pendulum Effect Fusion Monster", value: "Pendulum Effect Fusion Monster" },
    { label: "Synchro Monster", value: "Synchro Monster" },
    { label: "Synchro Pendulum Effect Monster", value: "Synchro Pendulum Effect Monster" },
    { label: "Synchro Tuner Monster", value: "Synchro Tuner Monster" },
    { label: "XYZ Monster", value: "XYZ Monster" },
    { label: "XYZ Pendulum Effect Monster", value: "XYZ Pendulum Effect Monster" },
    { label: "Skill Card", value: "Skill Card" },
    { label: "Token", value: "Token" }
]

const listaFrameTypes = [
    { label: "Normal", value: "Normal" },
    { label: "Effect", value: "Effect" },
    { label: "Ritual", value: "Ritual" },
    { label: "Fusion", value: "Fusion" },
    { label: "Synchro", value: "Synchro" },
    { label: "XYZ", value: "XYZ" },
    { label: "Link", value: "Link" },
    { label: "Normal Pendulum", value: "Normal Pendulum" },
    { label: "Effect Pendulum", value: "Effect Pendulum" },
    { label: "Ritual Pendulum", value: "Ritual Pendulum" },
    { label: "Fusion Pendulum", value: "Fusion Pendulum" },
    { label: "Synchro Pendulum", value: "Synchro Pendulum" },
    { label: "XYZ Pendulum", value: "XYZ Pendulum" },
    { label: "Spell", value: "Spell" },
    { label: "Trap", value: "Trap" },
    { label: "Token", value: "Token" },
    { label: "Skill", value: "Skill" }
]

const LibraryComponent = (props) => {
    const {
        cards,
        archetypes
    } = props

    const formatarArchetypes = archetypes.map(item => ({
        label: item.archetype_name,
        value: item.archetype_name
    }));

    useEffect(() => {
        setCardsLibrary(cards)
    }, [])

    const [cardsLibradry, setCardsLibrary] = useState([])

    const [cartaSelecionada, setCartaSelecionada] = useState({})
    const [girarCarta, setGirarCarta] = useState('');

    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [frameType, setFrameType] = useState('');
    const [archetype, setArchetypes] = useState('');
    const [race, setRace] = useState('');
    const [level, setLevel] = useState(null);

    const [carregamento, setCarregamento] = useState(false);

    const handleSelectCard = (card) => {
        setCartaSelecionada(card)
        setGirarCarta('')
        setTimeout(() => {
            setGirarCarta('selected')
        }, 1)
    }

    const padronizarLetras = (palavra) => {
        if (palavra && typeof palavra === 'string') {
            const palavraFormatada = palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
            return palavraFormatada
        }
        return '-'
    }
    console.log(cardsLibradry);
    // Pesquisar dados quando os filtros mudarem
    // useEffect(() => {
    //     setCarregamento(true)
    //     const debounceFetchCards = setTimeout(() => {
    //         const fetchData = async () => {
    //             //Requisição à API usando os valores dos filtros
    //             const response = await userService.getCards(nome, tipo, archetype, frameType, race, level)
    //             if (!response) {
    //                 setCardsLibrary([])
    //             } else {
    //                 const limitarMaxCartas = getRandomNumbers(response, 100);
    //                 setCardsLibrary(limitarMaxCartas)
    //             }
    //             setCarregamento(false)
    //         }
    //         fetchData()
    //     }, 500)
    //     return () => clearTimeout(debounceFetchCards);
    // }, [nome || tipo || archetype || frameType || race || level])

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
                                    <h3>{cartaSelecionada.name}</h3>
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
                                                    <span style={{ paddingLeft: cartaSelecionada.atk ? '0' : '1rem' }}>{cartaSelecionada.atk ? cartaSelecionada.atk : '-'}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className='span'>Def</span>
                                                <div style={{ paddingLeft: 0 }}>
                                                    <img alt='def icon' src={shieldSVG} width={22} />
                                                    <span style={{ paddingLeft: cartaSelecionada.atk ? '0' : '1rem' }}>{cartaSelecionada.atk ? cartaSelecionada.atk : '-'}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className='span' style={{ color: '' }}>Level</span>
                                                <div>
                                                    <img alt='level icon' src={levelImg} width={16} style={{ marginRight: '3px' }} />
                                                    <span style={{ paddingLeft: cartaSelecionada.atk ? '0' : '1rem' }}>{cartaSelecionada.level ? cartaSelecionada.level : '-'}</span>
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
                            <Select dados={listaType} setValor={setTipo} valor={tipo} />
                        </label>
                        <label>
                            <span>FrameType</span>
                            <Select dados={listaFrameTypes} setValor={setFrameType} valor={frameType} />
                        </label>
                        <label>
                            <span>Archetype</span>
                            <Select dados={formatarArchetypes} setValor={setArchetypes} valor={archetype} />
                        </label>
                        <label>
                            <span>Race/Typing</span>
                            <Select dados={listaRace} setValor={setRace} valor={race} />
                        </label>
                        <label>
                            <span>Level</span>
                            <Slider valor={level} setValor={setLevel} />
                        </label>
                    </div>
                    <div className='grid-library'>

                        {carregamento ?
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f2f2f2', width: '100%', height: '67.8vh' }}>
                                <CircularIndeterminate />
                            </div>
                            :
                            cardsLibradry.length > 0 ?
                                cardsLibradry.map(item =>
                                    <div key={item.id} className='card-library' onClick={() => handleSelectCard(item)}>
                                        <img src={item.card_images[0].image_url_small} width={100} alt='card' />
                                    </div>
                                )
                                :
                                <div style={{ textAlign: 'center', color: '#f2f2f2', width: '100%', height: '67.8vh' }}>
                                    <h2>Nenhuma carta encontrada com os filtros aplicados.</h2>
                                </div>
                        }
                    </div>
                </div>

            </section>

        </section>
    );
}

export default LibraryComponent;