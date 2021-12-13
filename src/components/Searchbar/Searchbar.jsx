import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
const Searchbar = ({ onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <form onSubmit={onSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.defaultProps = {
  onSubmit: () => {},
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
