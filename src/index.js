import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { populateProduce } from './store/produce';
import { addToCart, removeFromCart, increaseCount, decreaseCount, inputCount, purchaseAction } from './store/cart';

const store = configureStore();

if (process.env.NODE_ENV !== 'prcodution') {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.increaseCount = increaseCount;
  window.decreaseCount = decreaseCount;
  window.inputCount = inputCount;
  window.purchaseAction = purchaseAction;
}
function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
