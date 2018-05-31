import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNoteActionCreator, filterNotesActionCreator } from "./allActions";
import { Route, Link } from 'react-router-dom';
import NoteView from './notView';
import { fetchingNotesActionCreator } from './FetchingNotes.js'



class NotesList extends Component {
    constructor(props) {
        super(props)
        console.log('props', this.props)
        this.state = {
            title: '',
            text: '',
            search: '',
            divStyle: true
        }
    }
    searchHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    componentWillMount = () => {

        this.props.fetchingNotesActionCreator()

    }
    // logOut = () => {
    //     localStorage.removeItem('token1')
    //     this.props.history.push('/');
    //     this.props.history.push('/');

    // }

    render() {

        // let filterNotesAction = () => {
        //     return this.state.search;
        // }
        return (
            <div className="AllNotes">

                {/* <button className="Logout !important" onClick={this.logOut}>LogOut</button> */}

                <input className='FilterInput'
                    type="text"
                    placeholder='Search for a note'
                    name='search'
                    value={this.state.search}
                    onChange={this.searchHandler}
                />
                <button className="SearchButton !important" onClick={() => { /*filterNotesAction();*/ this.setState({ search: '' }) }} >Back</button>
                <p>Your Notes:</p>

                <div className="NotesSection" >
                    {
                        this.state.search === "" &&
                        this.props.notes.map((note, index) => {
                            if (note === null || note === undefined) {
                                return
                            }
                            return (
                                <div className="Notes" key={index}>
                                    <Link to={`/app/${note.title}`} className="edit">
                                        <div className="NoteTitle" key={note.title} >{note.title}</div>
                                    </Link>
                                    <div className=" NoteText" key={"note.text"} >{note.text}</div>
                                </div>
                            );
                        }
                        )
                    }
                    {
                        this.state.search !== "" &&
                        this.props.notes
                            .filter((item, index) => {

                                if (item === undefined || item === null) {
                                    return false
                                } else {
                                    return item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                                }
                            })

                            .map((note, index) => {
                                return (
                                    <div className="Notes" key={index}>
                                        <Link to={`/app/${note.title}`} className="edit">
                                            <div className="NoteTitle" key={note.title} >{note.title}</div>
                                        </Link>
                                        <div className=" NoteText" key={"note.text"} >{note.text}</div>
                                    </div>
                                );
                            })
                    }

                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        notes: state.notesReducer,
    }
}
export default connect(mapStateToProps, { addNoteActionCreator, fetchingNotesActionCreator })(NotesList)