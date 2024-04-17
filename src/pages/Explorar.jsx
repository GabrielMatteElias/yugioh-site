import React from 'react'
import './Explorar.css';
import PaginaBase from './PaginaBase'
import Card from '../components/Cards/Card';

class Explorar extends React.Component {
    componentDidMount() {
        const { atualizarCaminhoHistorico } = this.props;
        atualizarCaminhoHistorico(['Home']);
    }

    render() {
        return (
            <section className='container-explore'>
                <div className='grid-cards'>
                    test

                </div>

            </section>
        );
    }
}

export default PaginaBase(Explorar);


