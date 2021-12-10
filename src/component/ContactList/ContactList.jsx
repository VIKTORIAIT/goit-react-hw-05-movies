import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ data, onDelete }) => {
  return (
    <>
      <ul className={s.list}>
        {data.map(el => {
          return (
            <li key={el.id} className={s.item}>
              <p className={s.text}>
                {el.name}: {el.number}
              </p>
              <button onClick={onDelete} id={el.number} type="button">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
