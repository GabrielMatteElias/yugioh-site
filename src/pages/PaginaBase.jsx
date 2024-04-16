import React from 'react';
import MenuSuperior from '../components/Header/Header';
import './PaginaBase.css'

const PaginaBase = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                nomesCaminho: []
            };
        }
        atualizarCaminhoHistorico = (novoCaminho) => {
            this.setState({ nomesCaminho: novoCaminho });
        };

        render() {
            return (
                <div className='main-container'>
                    <MenuSuperior nomesCaminho={this.state.nomesCaminho} />
                    <main className='page-container'>
                        <WrappedComponent atualizarCaminhoHistorico={this.atualizarCaminhoHistorico} {...this.props}>
                            {this.props.children}
                        </WrappedComponent>
                    </main>
                </div>
            );
        }
    };
};

export default PaginaBase;