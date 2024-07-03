import React, { useState, useEffect, useRef } from 'react';
import './InfinityCarousel.css';

const InfinityCarousel = ({ product }) => {
    const [currentTranslateX, setCurrentTranslateX] = useState(0);
    const itemsWrapperRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const loadMoreItems = () => {
        const items = [];
        for (let i of product) {
            items.push(`${i}`);
        }
        return items;
    };

    const [items, setItems] = useState(loadMoreItems().concat(loadMoreItems()));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTranslateX(prevTranslateX => {
                let newTranslateX = prevTranslateX - 1; // Velocidade de rolagem
                const itemWidth = 210; // Largura do item mais margem
                const totalWidth = items.length * itemWidth / 2;

                if (Math.abs(newTranslateX) >= totalWidth) {
                    return 0; // Reiniciar para criar efeito infinito
                }

                return newTranslateX;
            });
        }, 16); // Aproximadamente 60 FPS

        return () => clearInterval(interval);
    }, [items]);

    return (
        <div>
            <div id="scroll-container" ref={scrollContainerRef}>
                <div
                    id="items-wrapper"
                    ref={itemsWrapperRef}
                    style={{ transform: `translateX(${currentTranslateX}px)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <img src={item} alt=''/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default InfinityCarousel;
