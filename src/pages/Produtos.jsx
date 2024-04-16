import React from 'react'
import './Home.css';
import PaginaBase from './PaginaBase'
import Card from '../components/Cards/Card';

class Produtos extends React.Component {
    componentDidMount() {
        const { atualizarCaminhoHistorico } = this.props;
        atualizarCaminhoHistorico(['Home']);
    }

    render() {
        return (
            <section className='container-products'>
                <div className='grid-cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>

            </section>
        );
    }
}

export default PaginaBase(Produtos);


