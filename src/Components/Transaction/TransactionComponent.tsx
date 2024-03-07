import React from "react";
import "./_style.scss"
import { Transaction, TransactionType } from "../../Utils/types";
import ImageIcon from "./ImageIcon";


const TransactionComponent = (props: Transaction): React.JSX.Element => {

    return <div className={'transaction-wrapper'}>
        <div className="row transaction_container">
            <div className="col-2 image-icon">
                <ImageIcon small = {false} category = {props.category} />
            </div>
            <div className="col-6 tr">
                <div className="row tr_name">{props.name}</div>
                <div className="row tr_date">{props.date}</div>
            </div>
            <div className={`col tr_amount ${props.transactionType === TransactionType.Deduct ? 'deduct' : 'credit'}`}>
                <span>{`${props.transactionType === TransactionType.Deduct ? "-" : "+"}${props.amount}`}</span>
            </div>
        </div>
        <div className="row">
            <div className="col display-message">
                <ImageIcon small={true} />
                <span className="message-text">{props.message}</span>
            </div>

        </div>
    </div>
}

export default TransactionComponent;