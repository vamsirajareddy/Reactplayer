import React from 'react';
import ReactDom from 'react-dom';
//create a new component. Thics component should produce some HTML
const App = () => {
  return <div>hello</div>;
}
// This component generated HTML and put it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
