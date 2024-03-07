import React from "react";
import "./_style.scss"
import CardDot from "./CardDot";
import { Card } from "../../Utils/types";

const CreditCard = ({card} : {
    card: Card
}): React.JSX.Element => {

    return <div>
        <div style = {{display: 'flex' , justifyContent: 'end'}}>
            <div className="show-card">
                <img src="./remove_red_eye-24px.svg" alt="" />
                <span>Show card number</span>
            </div>
        </div>
        <div className={`credit_card ${card.frozen ? 'frozen' : 'normal'}`}>
            <div className="row company-logo">
                <img src="./aspireLogoWhite.svg" alt="" height={"25px"} width={"85px"} />
            </div>
            <div className="row holder-name">
                <span>{card.holderName}</span>
            </div>
            <div className="row card-number">
                <div className="col card-info">

                    <span className="card-content">
                        <CardDot repeat={4} />
                    </span>
                    <span className="card-content">
                        <CardDot repeat={4} />
                    </span>
                    <span className="card-content">
                        <CardDot repeat={4} />
                    </span>
                    <span className="card-content">2020</span>
                </div>

            </div>
            <div className="row card-dates">
                <div className="col-5 card-exp">
                    {card.date}
                </div>

                <div className="col card-cvv">
                    <div style={{ fontSize: '13px' }}>CVV: </div>
                    <div className="cvv-hidden">
                        <div style={{ height: '27px' }}>***</div>
                    </div>

                </div>

            </div>
            <div className="row visa-logo">
                <img src="./visaLogo.svg" alt="" height={"24px"} width={"67px"} />
            </div>

        </div>
    </div>
}

export default CreditCard