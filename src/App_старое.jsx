import React, { useState } from "react";
import { Component } from "react";
import Loader from "./components/Loader/Loader";
import Searchbar from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";

import s from "./App.module.css";

const API_KEY = "24365762-4d41dfacdb025e40bdae241c8";

export default function App() {
  const [hits, setHits] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [id, setId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchRequest = () => {
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
  };

  const componentDidMount = () => {
    this.fetchRequest();
  };

  const componentDidUpdate = (prevProps, prevState) => {
    if (this.state.q !== prevState.q || this.state.page !== prevState.page) {
      this.fetchRequest();
    }
  };

  const componentWillUnmount = () => {
    console.log("unmount");
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target.search.value);

    this.setState({
      page: 1,
      q: ev.target.search.value,
    });
  };
  const onMoreButtonClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  const onImageClick = (ev) => {
    if (ev.target.tagName === "IMG") {
      this.setState({ id: ev.target.id });
    }
    this.onModalOpen();
  };

  const onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  const handleEscape = (ev) => {
    console.log(ev.code);
    if (ev.code === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  const onModalClose = (ev) => {
    if (ev.target.tagName === "IMG") return;
    this.setState({ isModalOpen: false });
  };

  const { hits, isLoad, isModalOpen, id, totalHits, page } = this.state;
  const maxPage = Math.ceil(totalHits / 12) === page;
  return (
    <div className={s.App}>
      <Searchbar onSubmit={this.onSubmit} />
      {this.state.isLoad && <Loader />}
      <ImageGallery imgs={hits} onClick={onImageClick} />
      {!isLoad && !maxPage && totalHits !== 0 && (
        <Button onClick={onMoreButtonClick} />
      )}
      {this.state.isLoad && page !== 1 && <Loader />}
      {isModalOpen && (
        <Modal
          handleEscape={handleEscape}
          imgs={hits}
          id={id}
          onClick={onModalClose}
        />
      )}
    </div>
  );
}
