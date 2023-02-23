// CORE
import { Component } from "react";
// COMPONENTS
import { ContactItem } from "../ContactItem/ContactItem";
// STYLE
import "./style.css";

export class ContactList extends Component {
  render() {
    const { state, deleteContact } = this.props;

    return (
      <div className="table-responsive">
        <table>
          <tbody>
            {state &&
              state.map((contact) => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  deleteContact={deleteContact}
                />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
