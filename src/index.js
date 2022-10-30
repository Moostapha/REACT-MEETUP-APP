import React from 'react';
import ReactDOM from 'react-dom/client';

// router
// import { BrowserRouter } from 'react-router-dom';

//  components
import App from './App';

// import fonction component de store afin de l'appliquer sur all components
import { FavoritesContextProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </React.StrictMode>
);

