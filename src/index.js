import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = (state) => {
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
    <App />
    </StoreContext.Provider>
  </React.StrictMode>
)
};

renderTree (store.getState());
store.subscribe ( () => {
  let state = store.getState();
  renderTree(state);
} );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();