import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from 'containers/App';
import configureStore from 'store/configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};
const store = configureStore(initialState);

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    MOUNT_NODE,
  );
};

render();

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  // https://github.com/facebook/create-react-app/issues/2317
  module.hot.accept('containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

registerServiceWorker();
