import React from 'react'
import './Home.css';
import PaginaBase from './PaginaBase'
import Carousel from '../components/Carousel/Carousel';
import Api from '../Services/Api';
import { getRandomNumbers } from '../Utils/DevolverItensAleatorios';
import tornament1 from '../img/tornaments1.png'
import tornament2 from '../img/tornaments2.png'
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../components/Footer/Footer';
const userService = new Api()

class PaginaInicial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            cardSelecionado: {},
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
                        <Link to={'/explorar'} className='btn-to-explore'>See More Cards<ArrowForwardIcon/></Link>
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
                <Footer />
            </section>
        );
    }
}

export default PaginaBase(PaginaInicial);