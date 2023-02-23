// CORE
import { Component } from "react";
// STYLE
import "./style.css";

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        firstName: "",
        secondName: "",
        phone: "",
      },
    };
  }

  handleChanged = (e) => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const addContact = this.props.addContact;
    addContact(this.state.contact);
    this.handleReset();
  };

  handleReset = (e) => {
    const setVisibleForm = this.props.setVisibleForm;
    setVisibleForm();
    this.setState({
      contact: {
        firstName: "",
        secondName: "",
        phone: "",
      },
    });
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          placeholder="Add first name"
          name="firstName"
          value={this.state.contact.firstName}
          onChange={this.handleChanged}
        />
        <input
          type="text"
          placeholder="Add second name"
          name="secondName"
          value={this.state.contact.secondName}
          onChange={this.handleChanged}
        />
        <input
          type="text"
          placeholder="Add phone"
          name="phone"
          value={this.state.contact.phone}
          onChange={this.handleChanged}
        />
        <button className="save-btn" type="submit" onClick={this.handleSubmit}>
          Save
        </button>
        <button className="cancel-btn" type="reset" onClick={this.handleReset}>
          Cancel
        </button>
      </form>
    );
  }
}
