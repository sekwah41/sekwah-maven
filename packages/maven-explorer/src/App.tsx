import React from 'react';
import './App.scss';
import {Layout} from "antd";
import {BrowserRouter as Router,} from "react-router-dom";
import FileBrowser from "./FileBrowser";

function App() {

  return (
    <div className="App">
      <Router>
        <FileBrowser />
      </Router>
    </div>
  );
}

export default App;
