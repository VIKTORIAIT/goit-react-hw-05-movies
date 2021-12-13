import React, { useState, useEffect } from "react";
// import { Component } from "react";
import Loader from "./components/Loader/Loader";
import Searchbar from "./components/Searchbar/Searchbar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { Button } from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

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
      page: page,
    };
    if (q) fetchParams.q = q;
    if (page === 1) setHits([]);
    const paramsString = new URLSearchParams(fetchParams);

    setIsLoad(true);
    fetch(`https://pixabay.com/api/?${paramsString}`)
      .then((data) => data.json())
      .then((data) => {
        setHits(page === 1 ? data.hits : [...hits, ...data.hits]);
        setTotalHits(data.totalHits);
        setIsLoad(false);
      })
      .catch((error) => {
        setIsLoad(false);
      });
  };

  useEffect(() => {
    console.log(2);
    fetchRequest();
  }, [q, page]);

  const onSubmit = (ev) => {
    ev.preventDefault();
    setPage(1);
    setQ(ev.target.search.value);
  };

  const onMoreButtonClick = () => {
    setPage(page + 1);
  };

  const onImageClick = (ev) => {
    if (ev.target.tagName === "IMG") {
      setId(ev.target.id);
    }
    onModalOpen();
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleEscape = (ev) => {
    if (ev.code === "Escape") {
      setIsModalOpen(false);
    }
  };

  const onModalClose = (ev) => {
    if (ev.target.tagName === "IMG") return;
    setIsModalOpen(false);
  };

  const maxPage = Math.ceil(totalHits / 12) === page;
  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmit} />
      {isLoad && <Loader />}
      <ImageGallery imgs={hits} onClick={onImageClick} />
      {!isLoad && !maxPage && totalHits !== 0 && (
        <Button onClick={onMoreButtonClick} />
      )}
      {isLoad && page !== 1 && <Loader />}
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
