import React, {Component} from 'react'
import classes from './Noted.module.css'
import SummaryBox from '../../SummaryBox/SummaryBox'
import NoteTaker from '../../NoteTaker/NoteTaker'

class Noted extends Component {
    state = {
        notes: [],
        currentNoteTitle: '',
        currentNoteBody: '',
        currentNoteTags: [],
        searchedText: ''
    }

    titleChangeHandler = (event) => {
        this.setState({
            currentNoteTitle: event.target.value
        })
    }

    noteChangeHandler = event => {
        this.setState({
            currentNoteBody: event.target.value
        })
    }

    trashClickHandler = () => {
        this.setState({
            currentNoteBody: '',
            currentNoteTitle: '',
            currentNoteTags: []        
        })
    }

    addNoteHandler = () => {
        let currentNotesState = [
            ...this.state.notes
        ]
        const newNote = {
            title: this.state.currentNoteTitle,
            body: this.state.currentNoteBody,
            tags: this.state.currentNoteTags
        }

        currentNotesState.push(newNote)

        this.setState({
            notes: currentNotesState,
            currentNoteBody: '',
            currentNoteTitle: '',
            currentNoteTags: []
        })
    }

    render(){
        return (
          <>
            <SummaryBox 
                addNote={this.addNoteHandler} 
            />
            <NoteTaker
                noteWritten={this.noteChangeHandler}
                titleWritten={this.titleChangeHandler}
                trashClick={this.trashClickHandler}
                title={this.state.currentNoteTitle}
                body={this.state.currentNoteBody}
            />
          </>
        );
    }
}

export default Noted
