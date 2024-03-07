import { Card } from "../../Utils/types"
import { RECIEVE_CARDS_LIST  , ADD_TO_CARDS_LIST , UPDATE_CARDS_LIST , REMOVE_FROM_CARDS_LIST} from "./constants"

export const cardsReceived = (arg: Card[]) => {
    return {
        type: RECIEVE_CARDS_LIST,
        payload: arg
    }
}


export const addCard= (arg: Card) => {
    return {
        type: ADD_TO_CARDS_LIST,
        payload: arg
    }
}


export const updateCard = (arg: Card , index:number) => {
    return {
        type: UPDATE_CARDS_LIST,
        payload: arg,
        index
    }
}

export const removeCard = (index:number) => {
    return {
        type: REMOVE_FROM_CARDS_LIST,
        index
    }
}