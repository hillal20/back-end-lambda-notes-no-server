import React, { Component } from 'react';
import './App.css';
import NotesList from "./notesList"
import AddNewNote from './addNewNote';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Link } from 'react-router-dom';
import { addNoteActionCreator } from "./allActions";
import { connect } from 'react-redux';
import NoteView from "./notView";
import EditNote from "./editNote";
import { persistStore } from 'redux-persist'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  logOut = () => {
    localStorage.removeItem('token1')
    this.props.history.push('/');
    this.props.history.push('/');

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="LambdaNotes">
            <div className="LambdaNotes_p">
              <span>Lambda</span><span> Notes</span>

            </div>

            <button className="Logout !important" onClick={this.logOut}>LogOut</button>



            <p className="Buttons">
              <Link to="/app" className="ButtonLink">
                <button>View Your Notes</button>
              </Link>
              <Link to="/app/NewNote">
                <button> + Create New Note</button>
              </Link>
            </p>
          </div>
          <Route path="/app" exact component={NotesList} />
          <Route path="/app/NewNote" exact component={AddNewNote} />
          <Route path="/app/EditCurrentNote/:index" exact component={EditNote} />
          <Route path="/app/:noteName" exact render={(RouterProps) => {
            return (<NoteView {...RouterProps} />)
          }} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps, addNoteActionCreator)(App);

