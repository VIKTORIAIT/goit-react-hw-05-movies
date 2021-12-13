import React from "react";
import s from "./Modal.module.css";

export class Modal extends React.Component {
  componentDidMount() {
    console.log("mounted modal");
    window.addEventListener("keydown", this.props.handleEscape);
  }
  componentWillUnmount() {
    console.log("i am unmounted");
    window.removeEventListener("keydown", this.props.handleEscape);
  }

  render() {
    const { imgs, id, onClick } = this.props;
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
}
