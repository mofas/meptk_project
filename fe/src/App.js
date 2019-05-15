import React, { useState } from 'react';
import './App.css';

function App() {
  let [pageIdx, setPage] = useState('main');

  const printOption = option => {
    fetch('http://10.0.1.18:4003/print/demo' + option);
    setPage('main');
  };

  let currentPage = null;
  if (pageIdx === 'main') {
    currentPage = (
      <div
        className="fullPage"
        style={{ background: '#000', color: '#fff' }}
        onClick={() => setPage('main2')}
      >
        THIS IS A LOOING VIDEO
      </div>
    );
  } else if (pageIdx === 'main2') {
    currentPage = (
      <div
        className="fullPage"
        style={{ background: '#000', color: '#fff' }}
        onClick={() => setPage('option')}
      >
        THIS IS THE MAIN SCREEN
        <br />
        CLICK TO CONTINUE
      </div>
    );
  } else if (pageIdx === 'option') {
    currentPage = (
      <div className="fullPage">
        <div
          className="container"
          style={{ background: 'red', color: 'white' }}
          onClick={() => setPage('optionA')}
        >
          OPTION A
        </div>
        <div
          className="container"
          style={{ background: 'blue', color: 'white' }}
          onClick={() => setPage('optionB')}
        >
          OPTION B
        </div>
      </div>
    );
  } else if (pageIdx === 'optionA') {
    currentPage = (
      <div
        className="fullPage"
        style={{ background: 'red', color: '#fff' }}
        onClick={() => setPage('printA')}
      >
        Option A
      </div>
    );
  } else if (pageIdx === 'optionB') {
    currentPage = (
      <div
        className="fullPage"
        style={{ background: 'blue', color: '#fff' }}
        onClick={() => setPage('printB')}
      >
        Option A
      </div>
    );
  } else if (pageIdx === 'printA') {
    currentPage = (
      <div className="fullPage" style={{ background: 'red', color: '#fff' }}>
        PRINT OPTION A <br />
        <button className="left" onClick={() => printOption(1)}>
          PRINT
        </button>
        <button className="right" onClick={() => setPage('main')}>
          HOME
        </button>
      </div>
    );
  } else if (pageIdx === 'printB') {
    currentPage = (
      <div className="fullPage" style={{ background: 'blue', color: '#fff' }}>
        PRINT OPTION B <br />
        <button className="left" onClick={() => printOption(2)}>
          PRINT
        </button>
        <button className="right" onClick={() => setPage('main')}>
          HOME
        </button>
      </div>
    );
  }

  return <div className="App">{currentPage}</div>;
}

export default App;
