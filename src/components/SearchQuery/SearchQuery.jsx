import css from './SearchStyle.module.css';
const SearchQuery = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default SearchQuery;
