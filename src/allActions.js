import axios from "axios";
import { fetchingNotesActionCreator } from './FetchingNotes.js'

// export const FILTERED_NOTE = 'FILTERED_NOTE'


const addNoteActionCreator = (obj) => {

    const promise = axios.post('https://hilal-lambda-notes.herokuapp.com/notes/', obj)
    return (dispatch) => {
        promise
            .then(p => { dispatch(fetchingNotesActionCreator()) })
            .catch(err => { console.log(err) })

    }

}


const editNoteActionCreator = (id, obj) => {
    console.log('id111', id)
    console.log('obj111', obj)
    const promise = axios.put(`https://hilal-lambda-notes.herokuapp.com/notes/${id}`, obj)

    return (dispatch) => {
        promise
            .then(p => {
                console.log('edit', p)
                dispatch(fetchingNotesActionCreator())
            })
            .catch(err => { console.log(err) })

    }
}

const deleteNoteActionCreator = (id) => {
    console.log('id', id)
    const promise = axios.delete(`https://hilal-lambda-notes.herokuapp.com/notes/${id}`)
    return (dispatch) => {
        promise
            .then(p => { dispatch(fetchingNotesActionCreator()) })
            .catch(err => { console.log(err) })

    }
}







// const filterNotesActionCreator = (filteredNote) => {
//     console.log('f', filteredNote)
//     // return {
//     //     type: FILTERED_NOTE,
//     //     payload: filteredNote

//     // }
// }


export { addNoteActionCreator, editNoteActionCreator, /*filterNotesActionCreator*/ deleteNoteActionCreator }