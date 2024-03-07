import React, { useEffect, useRef } from "react";
import "./_style.scss"
import CreditCard from "../CreditCard/CreditCard";

import { Card } from "../../Utils/types";
import { useSelector } from "react-redux";
import { getCards } from "../../store/cards/selectors";

const Carousel = ({ activeIndex, setActiveCard }: {
    activeIndex: number;
    setActiveCard?: (index: number) => void
}): React.JSX.Element => {

    const carouselRef = useRef<any>(null);
    const indicatorsRef = useRef<any>(null);

    const cards: Card[] = useSelector(getCards) || [];


    useEffect(() => {
        const updateIndicatorsPosition = () => {
            if (carouselRef.current && indicatorsRef.current) {
                const carouselRect = carouselRef.current.getBoundingClientRect();

                indicatorsRef.current.style.top = `${2 + carouselRect.height}px`;

                indicatorsRef.current.style.width = `${carouselRect.width}px`;

                carouselRef.current.addEventListener('slide.bs.carousel', (e: any) => {

                    if (e && e.to != 'undefined' && setActiveCard) {
                        setActiveCard(e.to);
                    }
                })

            }
        };



        updateIndicatorsPosition();

        window.addEventListener('resize', updateIndicatorsPosition);

        return () => {
            window.removeEventListener('resize', updateIndicatorsPosition);
        };
    }, [cards]);

    return (<div id="carouselExampleDark" className="carousel carousel-dark slide" ref={carouselRef}>

        <div className="carousel-inner">
            {cards && Array.isArray(cards) && cards.map((card: Card, index: number) => {


                return <div className={`carousel-item ${activeIndex === index ? 'active' : ''}`} data-bs-interval="10000" key={'carousel-item-' + (index + 1)} data-testid={"card-item-" + index}>
                    <CreditCard card={card} />
                </div>
            })}

        </div>

        <div className="carousel-indicators" ref={indicatorsRef} >
            {cards && Array.isArray(cards) && cards.map((card: Card, index: number) => {

                return <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={`${activeIndex === index ? 'active' : ''}`} aria-current="true" aria-label={"Slide " + (index+1)} key={'carousel-indicator-' + (index + 1)}></button>


            })}

        </div>

    </div>)
}

export default Carousel

