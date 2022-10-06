import React,{useState,useEffect} from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

const App = () => {
  const apiKey = 'DqiiWZTO4ewfbx2OBPgF1DjiIDCPLQ1D';
  const [data,setData] = useState([]);
  const [query,setQuery] = useState('cats');

  //retrieve data from server using the "query" state
  useEffect(() => {
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=${apiKey}`)
      .then(res => setData(res.data.data))
      .catch(error => console.log(`Error fetching and parsing data`,error))
  },[query])

  //Set the query value
  const performSearch = (value) => {
    setQuery(value);
  }
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
        <GifList data={data} /> 
      </div>
    </>
  );
}

export default App

