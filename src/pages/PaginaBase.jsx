import React from 'react';
import MenuSuperior from '../components/Header/Header';
import './PaginaBase.css'

const PaginaBase = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            
        }
        

        render() {
            return (
                <div className='main-container'>
                    <MenuSuperior />
                    <main className='page-container'>
                        <WrappedComponent>
                            {this.props.children}
                        </WrappedComponent>
                    </main>
                </div>
            );
        }
    };
};

export default PaginaBase;