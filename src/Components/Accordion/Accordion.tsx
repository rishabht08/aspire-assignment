import React from "react";
import "./_style.scss"
import Accordions from 'react-bootstrap/Accordion';


const Accordion = ({ children, header, icon, toggleKey }: {
    children: React.ReactNode;
    header: string;
    icon: string;
    toggleKey: string
}): React.JSX.Element => {

   

    return <Accordions>
        <Accordions.Item eventKey={toggleKey}>
            <Accordions.Header>
                <img className={'header-icon'} src={`${'./'}${icon}`} alt="" />
                <span>{header}</span>
            </Accordions.Header>
            <Accordions.Body>
                {children}
            </Accordions.Body>
        </Accordions.Item>
    </Accordions>
}

export default Accordion;