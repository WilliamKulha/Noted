import React, {Component} from 'react'
import classes from './Noted.module.css'
import SummaryBox from '../../SummaryBox/SummaryBox'
import NoteTaker from '../../NoteTaker/NoteTaker'
import NoteReadView from '../NoteReadView/NoteReadView'

class Noted extends Component {
    state = {
        currentSearchField: '',
        notes: [],
        currentNoteTitle: '',
        currentNoteBody: '',
        currentNoteTags: [],
        searchedText: '',
        currentNoteKey: Math.random()
                            .toString(36)
                            .substring(2, 15) + 
                        Math.random()
                            .toString(36)
                            .substring(2, 15),
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
            key: this.state.currentNoteKey
        }

        //Check if note key already exists
        const notesCopy = [...this.state.notes]

        for (let i = 0; i < notesCopy.length; i ++) {
            if (notesCopy[i].key === newNote.key) {
                notesCopy.splice(i, 1, newNote)
                this.setState({
                  notes: notesCopy,
                  currentNoteBody: "",
                  currentNoteTitle: "",
                  currentNoteTags: []
                });
                return
            }
            
            i++
        }
        

        let currentNotesState = [
            ...this.state.notes, newNote
        ]

        this.setState({
          notes: currentNotesState,
          currentNoteBody: "",
          currentNoteTitle: "",
          currentNoteTags: [],
          currentNoteKey:
            Math.random()
              .toString(36)
              .substring(2, 15) +
            Math.random()
              .toString(36)
              .substring(2, 15)
        });
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

    editClickhandler = () => {
        const selectedNote = this.state.currentReadingNote[0]
        this.setState({
            currentReadingNote: null,
            currentNoteTitle: selectedNote.title,
            currentNoteBody: selectedNote.body,
            currentNoteTags: selectedNote.tags,
            currentNoteKey: selectedNote.key
            })

    }

    searchChangeHandler = (e) => {
        this.setState({
            currentSearchField: e.target.value
        })
    }



    render(){
        let viewNote = this.state.currentReadingNote;
        if (viewNote) {
            viewNote = (
              <NoteReadView
                note={this.state.currentReadingNote}
                resetRead={this.resetReadNoteHandler}
                turnOnEdit={this.editClickhandler}
              />
            );
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
                searchChange={this.searchChangeHandler}
                searchField={this.state.currentSearchField}
            />
            {viewNote}
          </>
        );
    }
}

export default Noted
