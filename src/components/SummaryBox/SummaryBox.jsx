import React from 'react'
import classes from './SummaryBox.module.css'
import NoteSummary from '../NoteSummary/NoteSummary'

const summaryBox = props => {

    return (
      <div className={classes.SummaryContainer}>
        <input type="text" placeholder="SearchBar" />
        <button onClick={props.addNote}>+</button>
        <div className={classes.NotesSummary}>
          <p>tags toggle</p>
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