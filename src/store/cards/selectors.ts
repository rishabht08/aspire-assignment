import { createSelector } from "reselect";
import { get } from "lodash-es";
import { Card } from "../../Utils/types";


export const getCards = createSelector((state: any) => get(state, ['cards'], {}), (data) => data.list || [] );