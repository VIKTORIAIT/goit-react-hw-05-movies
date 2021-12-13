import React, { useEffect } from "react";
import s from "./Modal.module.css";

export default function Modal({ imgs, id, onClick, handleEscape }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const test = imgs.filter((el) => {
    return Number(el.id) === Number(id);
  });

  return (
    <div className={s.Overlay} onClick={onClick}>
      <div className={s.Modal}>
        {test.map((el) => {
          return <img key={el.id} src={el.largeImageURL} alt={el.tags} />;
        })}
      </div>
    </div>
  );
}
