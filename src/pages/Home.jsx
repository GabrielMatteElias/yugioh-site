import React from 'react'
import './Home.css';
import PaginaBase from './PaginaBase'
import Carousel from '../components/Carousel/Carousel';

class PaginaInicial extends React.Component {
    componentDidMount() {
        const { atualizarCaminhoHistorico } = this.props;
        atualizarCaminhoHistorico(['Home']);
    }

    render() {
        return (
            <section className='container-carrosel'>
                <div className='bg-home-first-section'>
                    <section className='inner'>
                        <div className='slideshow'>
                            <Carousel largura='20%' />
                        </div>

                    </section>
                </div>

            </section>
        );
    }
}

export default PaginaBase(PaginaInicial);


