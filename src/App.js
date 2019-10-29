import React from 'react';
import RandomQuotes from './components/RandomQuotes';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonsQuotes: null
    };
    this.getSimpsonsQuotes = this.getSimpsonsQuotes.bind(this);
  }

  getSimpsonsQuotes() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpsonsQuotes: data[0],
        });
      })
  }

  render() {
    return (
    <div className="App">
    {this.state.simpsonsQuotes ? <RandomQuotes simpsonsQuotes={this.state.simpsonsQuotes} /> : null}
    <button type="button" onClick={this.getSimpsonsQuotes}>Get Simpsons Quotes</button> 
    </div>
  );
  }
}


export default App;
