import React from "react";
import "./_style.scss"

const CardDot = ({ repeat }: {
    repeat: number
}): React.JSX.Element => {

    const numbers = Array.from({ length: repeat }, (_, index) => index + 1);

    return <div className="dot_container">
        {numbers.map((item:number , index:number) => {
            return (<div className="hidden" key = {"card-dots- " + item + " _ " + index}></div>)
        })}
    </div>

   
}

export default CardDot