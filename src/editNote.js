import React, { Component } from "react";
import { connect } from 'react-redux'
import { editNoteActionCreator, addNoteActionCreator } from "./allActions";



class EditNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noteTitle: '',
            noteText: ''
        }
    }
    AddNewNoteHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        console.log('s', this.props.match.params.index)
        const id = this.props.match.params.index;
        const obj = {
            title: this.state.noteTitle,
            text: this.state.noteText
        }
        console.log('o', obj);
        return (
            <div className='NewNote'>
                <p>Edit Note:</p>
                <input className="Input"
                    placeholder="add new note"
                    name="noteTitle"
                    value={this.state.noteTitle}
                    onChange={this.AddNewNoteHandler}
                />
                <textarea className="TextArea"
                    type="text"
                    placeholder="Note Content"
                    name="noteText"
                    value={this.state.noteText}
                    onChange={this.AddNewNoteHandler}
                />
                <button className='Button' onClick={() => {

                    this.props.editNoteActionCreator(id, obj), this.setState({
                        noteTitle: '',
                        noteText: ''
                    });
                    this.props.history.push(`/app/${this.state.noteTitle}`)
                }} >Save</button>
            </div>
        )
    }
}
const mapPropsToState = (state) => {
    console.log('editsate', state.notesReducer)
    return {
        notes: state.notesReducer
    }
}
export default connect(mapPropsToState, { editNoteActionCreator, addNoteActionCreator })(EditNote)