import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Contact from 'pages';
import { store } from 'app/store';

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Contact />
    </Provider>
  );
};

export default App;
