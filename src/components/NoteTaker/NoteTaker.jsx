import React from 'react'
import classes from './NoteTaker.module.css'

const noteTaker = props => {

    return (
      <div className={classes.NoteTakerWrapper}>
        <div className={classes.TopBar}>
          <button className={classes.TrashButton} 
            onClick={props.trashClick}>
            <span role="img" aria-label="delete note">🗑️</span>
          </button>
        </div>
        <div className={classes.TextEditor}>
          <input
            className={classes.NoteTakerInput, classes.TitleInput}
            type="text"
            placeholder="Headline"
            onChange={props.titleWritten}
            value={props.title}
          />
          <textarea
            className={classes.NoteTakerInput}
            placeholder="..."
            onChange={props.noteWritten}
            value={props.body}
          />
        </div>
      </div>
    );
}

export default noteTaker