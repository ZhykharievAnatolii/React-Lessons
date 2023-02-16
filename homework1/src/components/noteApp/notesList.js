import React from "react";
import { Note } from "./noteSingle";

class NotesList extends React.Component {
  render() {
    return (
      <div className="notes-list-outer">
        <ul className="notes-list">
          {this.props.notesProp.map((mapNote) => {
            return (
              <li
                key={mapNote.id}
                onClick={() => {
                  console.log("MEOW");
                  this.props.noteClickHandler(mapNote.id);
                }}
              >
                <Note noteProp={mapNote} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export { NotesList };
