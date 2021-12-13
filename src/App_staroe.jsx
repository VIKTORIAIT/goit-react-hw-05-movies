import { Component } from "react";
import Loader from "./components/Loader/Loader";
import Searchbar from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";

import s from "./App.module.css";

const API_KEY = "24365762-4d41dfacdb025e40bdae241c8";
class App extends Component {
  state = {
    hits: [],
    totalHits: null,
    page: 1,
    q: "",
    isLoad: false,
    id: null,
    isModalOpen: false,
  };

  fetchRequest() {
    const fetchParams = {
      per_page: 12,
      orientation: "horizontal",
      image_type: "photo",
      key: API_KEY,
      page: this.state.page,
    };
    if (this.state.q) fetchParams.q = this.state.q;
    if (this.state.page === 1) this.setState({ hits: [] });
    const paramsString = new URLSearchParams(fetchParams);

    this.setState({ isLoad: true });
    fetch(`https://pixabay.com/api/?${paramsString}`)
      .then((data) => data.json())
      .then((data) => {
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

  componentWillUnmount() {
    console.log("unmount");
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
      page: prevState.page + 1,
    }));
  };

  onImageClick = (ev) => {
    if (ev.target.tagName === "IMG") {
      this.setState({ id: ev.target.id });
    }
    this.onModalOpen();
  };

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleEscape = (ev) => {
    console.log(ev.code);
    if (ev.code === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  onModalClose = (ev) => {
    if (ev.target.tagName === "IMG") return;
    this.setState({ isModalOpen: false });
  };

  render() {
    const { hits, isLoad, isModalOpen, id, totalHits, page } = this.state;
    const maxPage = Math.ceil(totalHits / 12) === page;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoad && <Loader />}
        <ImageGallery imgs={hits} onClick={this.onImageClick} />
        {!isLoad && !maxPage && totalHits !== 0 && (
          <Button onClick={this.onMoreButtonClick} />
        )}
        {this.state.isLoad && page !== 1 && <Loader />}
        {isModalOpen && (
          <Modal
            handleEscape={this.handleEscape}
            imgs={hits}
            id={id}
            onClick={this.onModalClose}
          />
        )}
      </div>
    );
  }
}

export default App;
