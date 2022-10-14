import React,{useRef} from 'react';

function SearchForm({onSearch}) {
  const inputEle = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputEle.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search"
        name="search"
        ref={inputEle}
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>
  );
}

export default SearchForm;