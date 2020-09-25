import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Shares Held</th>
          <th>Market Value</th>
        </tr>
        <tr>
          <td>Apple</td>
          <td>108.22</td>
          <td>100</td>
          <td>10822</td>
        </tr>
        <tr>
          <td>Tesla</td>
          <td>387.79</td>
          <td>10</td>
          <td>3877.90</td>
        </tr>
        </table>

      </header>
    </div>
  );
}

export default App;
