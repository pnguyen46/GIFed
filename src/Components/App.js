import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

import SearchForm from "./SearchForm";
import GifList from "./GifList";

const App = () => {
  const apiKey = "DqiiWZTO4ewfbx2OBPgF1DjiIDCPLQ1D";
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("puppy");
  const [isLoading, setIsLoading] = useState(true);

  //retrieve data from server using the "query" state
  useEffect(() => {
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`)
      .then((res) => setData(shuffleArray(res.data.data)))
      .catch((error) => console.log(`Error fetching and parsing data`, error))
      .finally(() => setIsLoading(false));
  }, [query]);

  //Set the query value
  const performSearch = (value) => {
    setQuery(value);
  };

  /* Randomize array */
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          {/*pass the performSearch fn to searchForm component */}
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {/* pass down the data state */}
        {isLoading ? <p>Loading...</p> : <GifList data={data} />}
      </div>
    </>
  );
};

export default App;
