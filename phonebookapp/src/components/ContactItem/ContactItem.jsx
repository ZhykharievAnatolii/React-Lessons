// CORE
import { Component } from "react";
// STYLE
import "./style.css"

export class ContactItem extends Component {
  handleDelete = () => {
    const { deleteContact, contact } = this.props;
    deleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;
    return (
      <tr>
        <td>{contact.firstName}</td>
        <td>{contact.secondName}</td>
        <td>{contact.phone}</td>
        <td>
          <button className="del-btn" onClick={this.handleDelete}>Delete contact</button>
        </td>
      </tr>
    );
  }
}
