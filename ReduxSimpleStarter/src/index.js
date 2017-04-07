import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from'youtube-api-search';
import  VideoList from './components/video_list';
const API_KEY = 'AIzaSyDt1k6aqfE2cSF3tdnjfDzqLAn2gQCJp-4';
//create a new component. Thics component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state= {videos: [] };
    YTSearch({key: API_KEY, term:'surfboards'},(videos) => {
      this.setState({videos});
      /* This line is similar to this.setState({videos: videos0}) we use this
      when tthe value and the key are same in an object */
    });
  }
    render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos ={this.state.videos} />
      </div>
    );
  }
}
// This component generated HTML and put it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
