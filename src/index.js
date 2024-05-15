import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import React from 'react'; // Import React
import ReactDOM from 'react-dom'; // Import ReactDOM to render the React app
import './index.css'; // Import custom styles
import App from './App'; // Import the main App component

// Render the App component inside the element with id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);