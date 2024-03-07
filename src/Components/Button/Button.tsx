import React from "react";
import "./_style.scss"



const Button = ({ content, icon, extraStyle , onClick }: {
    content: string,
    icon: string,
    extraStyle?: any
    onClick?: () => void
}): React.JSX.Element => {

    return <button className="button" style={extraStyle || {}} onClick={() => {
        if(onClick) onClick()
    }}>
        <img className={'icon'} src={`${'./'}${icon}.svg`} alt="Icon" />
        {content}
    </button>
}

export default Button;