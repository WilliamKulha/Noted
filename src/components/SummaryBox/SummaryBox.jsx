import React from 'react'
import classes from './SummaryBox.module.css'

const summaryBox = props => {

    return(
        <div className={classes.SummaryContainer}>
            <input type="text" placeholder="SearchBar"/>
            <button onClick={props.addNote}>+</button>
            <div className={classes.NotesSummary}>
            <p>tags toggle</p>
            <ul>
                ...
            </ul>
            </div>           
        </div>
    )
}

export default summaryBox 