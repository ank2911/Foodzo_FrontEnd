import React from 'react';
import App from './App';
import "./index.css";
import { createRoot } from 'react-dom/client';

/*ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);*/


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);