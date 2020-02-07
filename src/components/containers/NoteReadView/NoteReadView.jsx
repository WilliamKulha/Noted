import React, {Component} from 'react'
import classes from './NoteReadView.module.css'
class NoteReadView extends Component{
    state = {
        note: this.props.note
    }

    render(){
        return (
          <div className={classes.ReadViewWrapper}>
            <div className={classes.TopWrapper}>
              <button
                className={classes.CloseButton}
                onClick={this.props.resetRead}
              >
                <span role="img" aria-label="Close this note">
                  ✖️
                </span>
              </button>
              <button
                className={classes.EditButton}
                onClick={this.props.turnOnEdit}
              >
                Edit
              </button>
            </div>
            <div className={classes.NoteWrapper}>
              <h5>{this.props.note[0].title}</h5>
              <p>{this.props.note[0].body}</p>
            </div>
          </div>
        );
    }
}

export default NoteReadView