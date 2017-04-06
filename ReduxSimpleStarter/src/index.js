import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDt1k6aqfE2cSF3tdnjfDzqLAn2gQCJp-4';

//create a new component. Thics component should produce some HTML
const App = () => {
  return(
     <div>
  <SearchBar />
  </div>
);
}
// This component generated HTML and put it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
