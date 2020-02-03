import React, {Component} from 'react'
import classes from './Noted.module.css'
import SummaryBox from '../../SummaryBox/SummaryBox'
import NoteTaker from '../../NoteTaker/NoteTaker'
import NoteReadView from '../NoteReadView/NoteReadView'

class Noted extends Component {
    state = {
        notes: [],
        currentNoteTitle: '',
        currentNoteBody: '',
        currentNoteTags: [],
        searchedText: '',
        currentReadingNote: null
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
        if (this.state.currentNoteTitle === '' && this.state.currentNoteBody === '') {
            return
        }
        const newNote = {
            title: this.state.currentNoteTitle,
            body: this.state.currentNoteBody,
            tags: this.state.currentNoteTags,
            key: this.state.currentNoteTitle + Math.floor(Math.random() * 100)
        }

        let currentNotesState = [
            ...this.state.notes, newNote
        ]

        this.setState({
            notes: currentNotesState,
            currentNoteBody: '',
            currentNoteTitle: '',
            currentNoteTags: []
        })
    }

    noteSummaryClickHandler = (key) => {
        const clicked = this.state.notes.filter(note => note.key === key);
        this.setState({
            currentReadingNote: clicked
        })
       
    }

    deleteNoteHandler = (key) => {
        const filteredNotes = this.state.notes.filter(item => item.key !== key)
        this.setState({
            notes: filteredNotes
        })
    }

    resetReadNoteHandler = () => {
        this.setState({currentReadingNote: null})
    }



    render(){
        let viewNote = this.state.currentReadingNote;
        if (viewNote) {
            viewNote = (
                <NoteReadView 
                note={this.state.currentReadingNote}
                resetRead={this.resetReadNoteHandler} />
            )
        } else viewNote = (
                 <NoteTaker
                   noteWritten={this.noteChangeHandler}
                   titleWritten={this.titleChangeHandler}
                   trashClick={this.trashClickHandler}
                   title={this.state.currentNoteTitle}
                   body={this.state.currentNoteBody}
                 />
               );
        return (
          <>
            <SummaryBox 
                addNote={this.addNoteHandler} 
                notes={this.state.notes}
                summaryClicked={this.noteSummaryClickHandler}
                minusClicked={this.deleteNoteHandler}
            />
            {viewNote}
          </>
        );
    }
}

export default Noted
