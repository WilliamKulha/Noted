import React, {Component} from 'react'
import classes from './NoteReadView.module.css'
class NoteReadView extends Component{
    state = {
        note: this.props.note
    }

    render(){
        return (
          <div className={classes.ReadViewWrapper}>
            <button onClick={this.props.resetRead}>
              <span role="img" aria-label="Close this note">✖️</span>
            </button>
            <p>editControl</p>
            <h5>{this.props.note[0].title}</h5>
            <p>{this.props.note[0].body}</p>
          </div>
        );
    }
}

export default NoteReadView