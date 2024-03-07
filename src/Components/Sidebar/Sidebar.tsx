import React from "react";
import "./_style.scss"
import { Link } from "react-router-dom";


const Sidebar = (): React.JSX.Element => {

    return <div className="sidebar">

        <img src="./aspireLogo.svg" alt="" />
        <div className="moto">
            <span>Trusted way of banking for 3,000+ SMEs and startups in Singapore</span>
        </div>
        <nav className="nav flex-column">
            <Link className="nav-link" to={"/"}>
                <img src="./nav_home.svg" alt="" />
                <span>Home</span>
            </Link>
            <Link className="nav-link" to={"/cards"} style={{color:'#01D167'}}>
                <img src="./nav_card.svg" alt="" />
                <span>Cards</span>
            </Link>
            <Link className="nav-link" to={"/payments"}>
                <img src="./nav_payments.svg" alt="" />
                <span>Payments</span>
            </Link>
            <Link className="nav-link" to={"/credit"}>
                <img src="./nav_credit.svg" alt="" />
                <span>Credit</span>
            </Link>
            <Link className="nav-link" to={"/settings"}>
                <img src="./nav_account.svg" alt="" />
                <span>Settings</span>
            </Link>
        </nav>

    </div>
}

export default Sidebar;