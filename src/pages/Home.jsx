import React from 'react'
import './Home.css';
import PaginaBase from './PaginaBase'
import Carousel from '../components/Carousel/Carousel';
import Api from '../Services/Api';
import { getRandomNumbers } from '../Utils/DevolverItensAleatorios';
import tornament1 from '../img/tornaments1.png'
import tornament2 from '../img/tornaments2.png'
import productBoosterPacks from '../img/home_products_booster_packs.png'
import productStructureDecks from '../img/home_products_structure_decks.png'
import productTins from '../img/home_products_tins.png'
import productStarterDecks from '../img/home_products_starter_decks.png'
import productOthers from '../img/home_products_others.png'
import productSpeedDuel from '../img/home_products_speed_duel.png'
import productTournamentPacks from '../img/home_products_tournament_packs.png'
import productAccessories from '../img/home_products_accessories.png'

import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../components/Footer/Footer';
import InfinityCarousel from '../components/Carousel/InfinityCarousel'

const userService = new Api()

class PaginaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            cardSelecionado: {},
            products: [],
            loading: true,
        }
        this.retornoIndiceCard = this.retornoIndiceCard.bind(this);

    }

    async componentDidMount() {
        const response = await userService.getCards()

        const randomCards = getRandomNumbers(response, 15);

        this.setState({ cards: randomCards })
        this.setState({ cardSelecionado: randomCards[0] })

        this.setState({ loading: false })
    }

    retornoIndiceCard(indice) {
        const cardSelecionado = this.state.cards[indice]
        this.setState({ cardSelecionado: cardSelecionado })
    }

    render() {
        if (this.state.loading) {
            <p>Carregando...</p>
            return
        }

        return (
            <section>
                <section className='bg-home-first-section'>
                    <div className='carousel-cards'>
                        <div>
                            <Carousel items={this.state.cards} retornoIndiceCard={this.retornoIndiceCard} />
                        </div>
                        <div className='info'>
                            <div>
                                <h3>{this.state.cardSelecionado.name}</h3>
                            </div>
                            <div>
                                <p>{this.state.cardSelecionado.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className='container-to-explore'>
                        <Link to={'/explorar'} className='btn-to-explore'>See More Cards<ArrowForwardIcon /></Link>
                    </div>
                </section>

                <section className='about'>
                    <div>
                        <h2>About Yu-Gi-Oh!</h2>
                        <p>
                            Yu-Gi-Oh! is an exciting universe based on a card game played with Monsters, Spells,
                            and Traps. The Yu-Gi-Oh! franchise includes manga series, television series, several
                            video games, the Yu-Gi-Oh! TRADING CARD GAME, and more! This short guide will help
                            you familiarize yourself with some of what Yu-Gi-Oh! has to offer.
                        </p>
                    </div>
                </section>

                <section className='bg-home-second-section'>
                    <h2>Tournament</h2>
                    <div className='tournament-container'>
                        <ul className='tornament-list'>
                            <li className='zoom'>
                                <img src={tornament1} />
                                <h5>Last Tournament</h5>
                            </li>
                            <li className='zoom'>
                                <img src={tornament2} />
                                <h5>Upcoming Tournaments</h5>

                            </li>
                        </ul>
                    </div>
                </section>

                <section className='home-products'>
                    <div>
                        <h2>Products</h2>
                    </div>
                    <InfinityCarousel
                        product={[productBoosterPacks, productStructureDecks, productTins, productStarterDecks, productOthers, productSpeedDuel, productTournamentPacks, productAccessories]} />
                </section>

                <Footer />
            </section>
        );
    }
}

export default PaginaBase(PaginaInicial);