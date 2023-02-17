import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div>
        {this.props.noteProp.done ? (
          <del>{this.props.noteProp.title}</del>
        ) : (
          this.props.noteProp.title
        )}
      </div>
    );
  }
}

export { Note };
