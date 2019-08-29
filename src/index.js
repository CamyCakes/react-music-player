import React from 'react';
import ReactDOM from 'react-dom';
import Songs from './components/Songs'

import './css/App.scss';

function App() {
    return (
      <div className="App">
            <Songs />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));