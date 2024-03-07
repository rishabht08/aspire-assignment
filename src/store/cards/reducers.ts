import { combineReducers } from "redux";
import { createReducer } from "../../Utils/create_reducer";
import { ADD_TO_CARDS_LIST, RECIEVE_CARDS_LIST, REMOVE_FROM_CARDS_LIST, UPDATE_CARDS_LIST } from "./constants";
import { Card } from "../../Utils/types";


export default combineReducers({
    list: createReducer([], {
        [RECIEVE_CARDS_LIST]: (state, opts: {
            type: string,
            payload: Card[]
        }) => {
          
            return opts.payload;
        } ,
        [ADD_TO_CARDS_LIST]: (state , opts: {
            type:string,
            payload: Card
        }) => {
            return [opts.payload , ...state]
        },
        [UPDATE_CARDS_LIST]: (state , opts: {
            type:string,
            payload: Card,
            index:number
        }) => {

            state[opts.index] = opts.payload
           
            return [...state]
        },
        [REMOVE_FROM_CARDS_LIST]: (state , opts: {
            type:string,
            index:number
        }) => {
            const indexToRemove = opts.index; 
            if (indexToRemove >= 0 && indexToRemove < state.length) {
                state.splice(indexToRemove, 1);
               
            }
           
            return [...state]
        }
    }),
})