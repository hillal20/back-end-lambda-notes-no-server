import { combineReducers } from 'redux';
import { notesReducer, usersReducer, fetchedNotesReducer } from './notesReducer';



const reducers = combineReducers({
    notesReducer, usersReducer,
});
export default reducers;