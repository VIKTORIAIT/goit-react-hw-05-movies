import { Component } from "react";
import { nanoid } from "nanoid";
import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";
import Filter from "./component/Filter";
import s from "./App.module.css";
import * as storage from "./services/localStorage";

const STORAGE_KEY = "contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  componentDidMount() {
    const savedContacts = storage.get(STORAGE_KEY);
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save(STORAGE_KEY, contacts);
    }
  }

  onChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleFilterChange = (ev) => this.setState({ filter: ev.target.value });
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  onDelete = (ev) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (item) => item.number !== ev.target.id
      ),
    }));
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const isDoubleName = this.state.contacts.some(
      (el) => el.name === this.state.name
    );
    if (isDoubleName) {
      alert(`${this.state.name} is already in contacts`);
    }
    if (!isDoubleName) {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          {
            name: prevState.name,
            id: nanoid(),
            number: prevState.number,
          },
        ],
      }));
    }
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm onChange={this.onChange} onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <ContactList
          data={this.getFilteredContacts()}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
