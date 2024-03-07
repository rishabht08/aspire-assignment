import { combineReducers } from "redux";
import cardReducr from "./cards/reducers"

export default combineReducers({
    cards: cardReducr
})