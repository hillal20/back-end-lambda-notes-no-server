

import { FILTERED_NOTE } from "./allActions";
import { FETCHING_NOTES_PENDING } from './FetchingNotes';
import { FETCHING_NOTES_SUCCESSFULLY } from './FetchingNotes';
import { FETCHING_NOTES_ERROR } from './FetchingNotes';
import { FETCHING_USERS_PENDING } from './FetchingNotes';
import { FETCHING_USERS_SUCCESSFULLY } from './FetchingNotes';
import { FETCHING_USERS_ERROR } from './FetchingNotes';


const initialState = [

]


const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        // case FILTERED_NOTE:
        //     return state = action.payload
        case FETCHING_NOTES_PENDING:
            return state
        case FETCHING_NOTES_SUCCESSFULLY:
            return state = action.payload.filter(item => { return item.title || item.text; })
        case FETCHING_NOTES_ERROR:
            return action.payload
        default:
            return state

    }
}

const usersReducer = (state = [], action) => {

    switch (action.type) {
        case FETCHING_USERS_PENDING:
            return state;
        case FETCHING_USERS_SUCCESSFULLY:
            return state = action.payload
        case FETCHING_USERS_ERROR:
            return state = action.payload
        default:
            return state
    }

}



export { notesReducer, usersReducer };