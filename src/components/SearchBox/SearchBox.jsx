import css from './SearchBox.module.css';
export default function SearchBox({ onChange }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.field}
        type="text"
        name="search"
        onChange={onChange}
      ></input>
    </div>
  );
}
