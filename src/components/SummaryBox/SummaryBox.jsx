import React from 'react'
import classes from './SummaryBox.module.css'
import NoteSummary from '../NoteSummary/NoteSummary'

const summaryBox = props => {

    return (
      <div className={classes.SummaryContainer}>
        <input type="text" placeholder="SearchBar" />
        <button onClick={props.addNote} className={classes.AddButton}>
          <span role="img" aria-label="Add this note">➕</span>
        </button>
        <div className={classes.NotesSummary}>
          <div className={classes.NoteSummariesContainer}>
            {props.notes.map(eachNote => {
              return (
                <NoteSummary
                  note={eachNote}
                  key={eachNote.key}
                  noteClick={props.summaryClicked}
                  minusClick={props.minusClicked}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default summaryBox 