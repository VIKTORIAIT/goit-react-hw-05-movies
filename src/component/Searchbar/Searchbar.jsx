import PropTypes from "prop-types";

const Searchbar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form onSubmit={onSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
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
