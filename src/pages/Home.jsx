import React from 'react'
import './Home.css';
import PaginaBase from './PaginaBase'
import Carousel from '../components/Carousel/Carousel';
import Api from '../Services/Api';
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
        const getRandomNumbers = (array) => {
            const numerosAleatorios = [];
            const tamanhoArray = array.length;

            while (numerosAleatorios.length < 25) {
                const indiceAleatorio = Math.floor(Math.random() * tamanhoArray);
                if (!numerosAleatorios.includes(array[indiceAleatorio])) {
                    numerosAleatorios.push(array[indiceAleatorio]);
                }
            }

            return numerosAleatorios;
        }

        const randomCards = getRandomNumbers(response);

        this.setState({ cards: randomCards })
        this.setState({ cardSelecionado: randomCards[0] })

        this.setState({ loading: false })
    }

    retornoIndiceCard(indice){
        console.log('aqui', indice);

        const cardSelecionado = this.state.cards[indice]
        this.setState({ cardSelecionado: cardSelecionado })

    }


    render() {
        if (this.state.loading) {
            <p>Carregando...</p>
            return
        }
        console.log(this.state.cards);
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