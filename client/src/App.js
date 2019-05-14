import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* 상대경로 의경우 3000으로 갈것임 
        근데 prod server에는 이게아니라 도메인으로 가야함
        https://lit-inlet-34663.herokuapp.com/auth/google
        http://localhost:5000/auth/google

        */}
        <a href ="/auth/google">Sing in with Gooogle</a>
      </header>
    </div>
  );
}

export default App;
