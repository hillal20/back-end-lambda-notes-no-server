import axios from "axios"
export const FETCHING_NOTES_PENDING = ' FETCHING_NOTES_PENDING';
export const FETCHING_NOTES_SUCCESSFULLY = 'FETCHING_NOTES_SUCCESSFULLY'
export const FETCHING_NOTES_ERROR = 'FETCHING_NOTES_ERROR';
export const FETCHING_USERS_PENDING = ' FETCHING_USERS_PENDING';
export const FETCHING_USERS_SUCCESSFULLY = ' FETCHING_USERS_SUCCESSFULLY';
export const FETCHING_USERS_ERROR = 'FETCHING_USERS_ERROR';




const fetchingNotesActionCreator = () => {
  const token = localStorage.getItem("token1");
  console.log("storageToken", token);
  const obj = {
    headers: { Authorization: `${token}` }
  };

  const promise = axios.get('https://hilal-lambda-notes.herokuapp.com/notes/', obj)
  return (dispatch) => {
    dispatch({ type: FETCHING_NOTES_PENDING, payload: 'loading.....' })
    promise.then(response => {
      console.log('res1', response.data.notes);
      dispatch({ type: FETCHING_NOTES_SUCCESSFULLY, payload: response.data.notes })
    })
      .catch(error => {
        console.log(error)
        dispatch({ type: FETCHING_NOTES_ERROR, payload: error })
      })
  }
}

const fetchingUsersActionCreator = () => {
  const promise = axios.get('https://hilal-lambda-notes.herokuapp.com/users/')
  console.log('promise2', promise)
  return (dispatch) => {
    dispatch({ type: FETCHING_USERS_PENDING })
    promise
      .then(response => {
        console.log('res2', response.data);
        dispatch({ type: FETCHING_USERS_SUCCESSFULLY, payload: response.data })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: FETCHING_USERS_ERROR, payload: error })
      })
  }
}




const sendingRegistrationActionCreator = (obj) => {

  const promise = axios.post('https://hilal-lambda-notes.herokuapp.com/users/', obj)
  return (dispatch) => {
    promise
      .then(response => {
        console.log('res3, response')
        dispatch(fetchingUsersActionCreator())
      })
      .catch(err => { console.log(err); })
  }
}








export { fetchingUsersActionCreator, fetchingNotesActionCreator, sendingRegistrationActionCreator }