import React from 'react'
import classes from './SummaryBox.module.css'
import NoteSummary from '../NoteSummary/NoteSummary'

const summaryBox = props => {

    return (
      <div className={classes.SummaryContainer}>
        <div className={classes.TopWrapper}>
          <input
            className={classes.SearchField}
            type="search"
            placeholder="🔍"
            onChange={props.searchChange}
          />
          <button onClick={props.addNote} className={classes.AddButton}>
            <span role="img" aria-label="Add this note">
              ➕
            </span>
          </button>
        </div>
        <div className={classes.NotesSummary}>
          <div className={classes.NoteSummariesContainer}>
            {props.notes
              .filter((note) =>
                note.title
                .toLowerCase()
                .includes(props.searchField.toLowerCase())
                )
              .map((eachNote) => (
                <NoteSummary
                  note={eachNote}
                  key={eachNote.key}
                  noteClick={props.summaryClicked}
                  minusClick={props.minusClicked}
                />
                )
              )
            }
          </div>
        </div>
      </div>
    );
}

export default summaryBox 