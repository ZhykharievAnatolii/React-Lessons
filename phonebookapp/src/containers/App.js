// CORE
import { Component } from "react";
// COMPONENTS
import { NoContacts } from "../components/NoContacts/NoContacts";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactForm } from "../components/ContactForm/ContactForm";
// STYLE
import "./style.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isVisibleForm: false,
    };
  }

  addContact = ({ firstName, secondName, phone }) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: crypto.randomUUID(), firstName, secondName, phone },
      ],
    });
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  setVisibleForm = () => {
    this.setState({
      isVisibleForm: !this.state.isVisibleForm,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="title-container">
          <h1>CONTACTS LIST</h1>
        </div>
        {this.state.contacts.length ? (
          <ContactList
            state={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        ) : (
          <NoContacts />
        )}
        <button className="hidden-btn" onClick={this.setVisibleForm}>
          {this.state.isVisibleForm ? "Hide form" : "Show form"}
        </button>
        {this.state.isVisibleForm && (
          <ContactForm
            addContact={this.addContact}
            setVisibleForm={this.setVisibleForm}
          />
        )}
      </div>
    );
  }
}
