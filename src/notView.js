import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteNoteActionCreator } from './allActions.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NoteView extends Component {
    constructor(props) {
        super(props)
        console.log("Hilo", this.props.notes)
        this.state = {
            modal: false
        }

    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    deleteFn = (id) => {

        deleteNoteActionCreator(id)
    }


    render() {

        console.log('x', deleteNoteActionCreator)


        return (
            <div >

                {this.props.notes.map((note, index) => {
                    console.log('index', note._id)
                    if (note === null || note === undefined) {
                        return
                    }
                    return (
                        note.title === this.props.match.params.noteName ?
                            <div key={index} className='.NoteCard'>
                                <div className="Edit">
                                    <Link to={`/app/EditCurrentNote/${note._id}`} className='editButton'>
                                        <div >Edit</div>
                                    </Link>
                                    <p onClick={this.toggle}>Delete</p>
                                    <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                                        <ModalBody>
                                            are you sure you want to delete?
                             </ModalBody>
                                        <ModalFooter>
                                            <Link to="/app">
                                                <Button color="primary" onClick={() => this.deleteFn(note._id)}>Delete</Button>
                                            </Link>
                                            {' '}
                                            <Button color="secondary" onClick={this.toggle}>No</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                                <div className="noteViewCard">
                                    < div className="noteViewCard_title">{note.title}</div>
                                    <div>{note.text}</div>
                                </div>
                            </div>
                            : null)
                })}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("filo", state.notesReducer)
    return {
        notes: state.notesReducer

    }
}
export default connect(mapStateToProps, {})(NoteView)