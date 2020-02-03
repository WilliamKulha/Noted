import React from 'react'
import classes from './NoteSummary.module.css'

const noteSummary = props => (
  <div className={classes.NoteSummaryContainer}>
    <h5 onClick={() => props.noteClick(props.note.key)}>{props.note.title}</h5>
    <h5 onClick={() => props.minusClick(props.note.key)}><span role="img" aria-label="Delete Note">➖</span></h5>
  </div>
);

export default noteSummary