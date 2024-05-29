import React from 'react'
import PaginaBase from './PaginaBase'
import Api from '../Services/Api';
import LibraryComponent from '../components/Library/Library';
import { getRandomNumbers } from '../Utils/DevolverItensAleatorios';
import CircularIndeterminate from '../components/SpinnerProgress/SpinnerProgress';
const userService = new Api()

class Explorar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            archetypes: [],
            cardSelecionado: {},
            loading: true,
        }
    }

    async componentDidMount() {

        const response = await userService.getCards()

        const randomCards = getRandomNumbers(response, 80);
        const responseArchetypes = await userService.getArchetypes()
        
        this.setState({ loading: false })
        this.setState({ cards: randomCards })
        this.setState({ archetypes: responseArchetypes })
    }

    render() {
        if (this.state.loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#27292d', height: '100vh'}}>
                    <CircularIndeterminate />
                </div>
            )

        }
        return (
            <div style={{ height: '100%' }}>
                <LibraryComponent cards={this.state.cards} archetypes={this.state.archetypes}/>
            </div>
        );
    }
}

export default PaginaBase(Explorar);


