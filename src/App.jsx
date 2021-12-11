import { Component } from "react";
import { Loader } from "./component/Loader/Loader";
import Searchbar from "./component/Searchbar/Searchbar";
// import { nanoid } from "nanoid";
// import ContactList from "./component/ContactList";
// import ContactForm from "./component/ContactForm";
// import Filter from "./component/Filter";
// import s from "./App.module.css";
// import * as storage from "./services/localStorage";

const API_KEY = "24365762-4d41dfacdb025e40bdae241c8";
class App extends Component {
  state = {
    hits: [],
    totalHits: null,
    page: 1,
    q: "",
    isLoad: false,
  };

  fetchRequest() {
    console.log(this.state.q, "fff");
    const fetchParams = {
      per_page: 12,
      orientation: "horizontal",
      image_type: "photo",
      key: API_KEY,
      page: this.state.page,
    };
    if (this.state.q) fetchParams.q = this.state.q;

    const paramsString = new URLSearchParams(fetchParams);
    console.log(paramsString.toString(), "paramsString");

    this.setState({ isLoad: true });
    fetch(`https://pixabay.com/api/?${paramsString}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState((perState) => ({
          hits:
            this.state.page === 1
              ? data.hits
              : [...perState.hits, ...data.hits],
          totalHits: data.totalHits,
        }));
        this.setState({ isLoad: false });
      })
      .catch((error) => {
        this.setState({ isLoad: false });
      });
  }

  componentDidMount() {
    this.fetchRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.q !== prevState.q || this.state.page !== prevState.page) {
      this.fetchRequest();
    }
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target.search.value);

    this.setState({
      page: 1,
      q: ev.target.search.value,
    });
  };
  onMoreButtonClick = () => {
    this.setState((prevState) => ({
      page: ++prevState.page,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoad && <Loader />}
        {/* <h1>Phonebook</h1>
        <ContactForm onChange={this.onChange} onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <ContactList
          data={this.getFilteredContacts()}
          onDelete={this.onDelete}
        /> */}
      </div>
    );
  }
}

export default App;
