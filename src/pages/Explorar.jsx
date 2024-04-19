import React from 'react'
import PaginaBase from './PaginaBase'
import Api from '../Services/Api';
import LibraryComponent from '../components/Library/Library';
const userService = new Api()

class Explorar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            cardSelecionado: {},
            loading: true,
        }

    }

    async componentDidMount() {

        const response = await userService.getCards()
        const getRandomNumbers = (array) => {
            const numerosAleatorios = [];
            const tamanhoArray = array.length;

            while (numerosAleatorios.length < 200) {
                const indiceAleatorio = Math.floor(Math.random() * tamanhoArray);
                if (!numerosAleatorios.includes(array[indiceAleatorio])) {
                    numerosAleatorios.push(array[indiceAleatorio]);
                }
            }

            return numerosAleatorios;
        }
        const randomCards = getRandomNumbers(response);
        this.setState({ loading: false })
        this.setState({ cards: randomCards })

        console.log(randomCards);
    }

    render() {
        if (this.state.loading) {
            <p>Carregando...</p>
            return
        }
        return (
            <div style={{ height: '100%' }}>
                <LibraryComponent cards={this.state.cards} />
            </div>
        );
    }
}

export default PaginaBase(Explorar);


