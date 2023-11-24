import { ACTION_TYPES } from "../types/ActionTypes1"

export const selectedForJob = (product) => {
    return {type:ACTION_TYPES.SELECTED_FOR_JOB,payload : product }
}

export const notElegible = (id) => {
    return {type: ACTION_TYPES.NOT_ELEGIBLE,payload: id}
}