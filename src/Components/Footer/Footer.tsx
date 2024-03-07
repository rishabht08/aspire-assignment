import React from "react";
import "./_style.scss"
import { Link } from "react-router-dom";


const Footer = (): React.JSX.Element => {

    return <div className="footer_mobile">

        <nav className="nav flex-row">
            <Link className="nav-link flex-column" to={"/"}>
                <img src="./gray_logo.svg" alt="" />
                <div>
                    <span>Home</span>
                </div>
       
            </Link>
            <Link className="nav-link flex-column" to={"/cards"} style={{color:'#01D167'}}>
                <img src="./nav_card.svg" alt="" />
                <div>
                    <span>Cards</span>
                </div>
       
            </Link>
            <Link className="nav-link flex-column" to={"/payments"}>
                <img src="./gray_payments.svg" alt="" />
                <div>
                    <span>Payments</span>
                </div>
       
            </Link>
            <Link className="nav-link flex-column" to={"/credit"}>
                <img src="./gray_credit.svg" alt="" />
                <div>
                    <span>Credit</span>
                </div>
       
            </Link>
            <Link className="nav-link flex-column" to={"/settings"}>
                <img src="./gray_account.svg" alt="" />
                <div>
                    <span>Settings</span>
                </div>
       
            </Link>
        </nav>

    </div>
}

export default Footer;