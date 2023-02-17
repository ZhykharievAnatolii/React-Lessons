import React from "react";
import "./notesApp.css";
import { NotesList } from "./notesList";

class TodoApp extends React.Component {
  state = {
    newNote: "",
    currentNotes: [],
  };

  render() {
    const noteClickHandler = (id) => {
      const objIndex = this.state.currentNotes.findIndex(
        (obj) => obj.id === id
      );
      if (objIndex === -1) {
        return;
      }
      const updatedObj = {
        ...this.state.currentNotes[objIndex],
        done: !this.state.currentNotes[objIndex].done,
      };

      const updatedList = [
        ...this.state.currentNotes.slice(0, objIndex),
        updatedObj,
        ...this.state.currentNotes.slice(objIndex + 1),
      ];
      this.setState({ currentNotes: updatedList });
    };

    const buttonClickHandler = () => {
      if (!this.state.newNote) {
        alert("Please add some text to your task :)");
        return;
      } else {
        this.setState({ errorMessage: "" });
      }
      const newNoteObj = {
        title: this.state.newNote,
        done: false,
        id: this.state.currentNotes.length + 1,
      };
      this.setState({ currentNotes: [...this.state.currentNotes, newNoteObj] });
      this.setState({ newNote: "" });
    };
    const numTodoFalse = this.state.currentNotes.filter(
      (filterNote) => filterNote.done === false
    ).length;
    return (
      <div className="notes-app">
        <div className="notes-title">
          Dear User, you have {!numTodoFalse ? "no" : numTodoFalse} pending{" "}
          {numTodoFalse === 1 ? "task" : "tasks"} !
        </div>

        <form
          className="notes-input-and-button"
          onSubmit={(ev) => ev.preventDefault()}
        >
          <input
            className="notes-input"
            placeholder="Task description"
            onChange={(evt) => this.setState({ newNote: evt.target.value })}
            value={this.state.newNote}
          />
          <input
            type="submit"
            onClick={buttonClickHandler}
            className="notes-button"
            value="Add this note"
          />
        </form>

        <NotesList
          notesProp={this.state.currentNotes}
          noteClickHandler={noteClickHandler}
        />
      </div>
    );
  }
}

export { TodoApp };
