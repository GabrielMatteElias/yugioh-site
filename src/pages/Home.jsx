import React from 'react'
import './Home.css';
import PaginaBase from './PaginaBase'
import Carousel from '../components/Carousel/Carousel';
import Api from '../Services/Api';
import { getRandomNumbers } from '../Utils/DevolverItensAleatorios';
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

    retornoIndiceCard(indice){
        const cardSelecionado = this.state.cards[indice]
        this.setState({ cardSelecionado: cardSelecionado })
    }

    render() {
        if (this.state.loading) {
            <p>Carregando...</p>
            return
        }
        return (
            <section className='container-carrosel'>
                <div className='bg-home-first-section'>
                    <div className='carousel-cards'>
                        <div>
                        <Carousel items={this.state.cards} retornoIndiceCard={this.retornoIndiceCard}/>
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
                </div>
            </section>
        );
    }
}

export default PaginaBase(PaginaInicial);