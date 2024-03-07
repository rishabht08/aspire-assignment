import React from "react";
import "./_style.scss"
import { TransactionCategory } from "../../Utils/types";



const ImageIcon = ({ small, category }: {
    small: boolean;
    category?: TransactionCategory
}): React.JSX.Element => {

    const isSmall = small

    const getSVGIcon = (): string => {
        if (!category) {
            return 'business-and-finance.svg';
        }
        switch (category) {
            case TransactionCategory.Bank:
                return 'file-storage.svg'
            case TransactionCategory.Event:
                return 'megaphone.svg'
            case TransactionCategory.Travel:
                return 'flights.svg'
            default: return 'business-and-finance.svg';

        }
    }

    return <div className={`icon-wrapper-${isSmall ? 'sm' : 'lg'}`}>
        <img src={`./${getSVGIcon()}`} alt="" height={isSmall ? '8px' : "15px"} width={isSmall ? "10px" : "16px"} />
    </div>

}

export default ImageIcon;