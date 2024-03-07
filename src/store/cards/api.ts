import { creditCards } from "../../Utils/sample_data";
import { Card } from "../../Utils/types";
import { cardsReceived } from "./actions";

export const requestCards = (callback?: (status?: boolean, res?: Card[]) => void) => {
    return (dispatch: (arg0: any) => void) => {
        dispatch(cardsReceived(creditCards))
        if (callback) {
            callback(true, creditCards)
        }
        return

    }
}