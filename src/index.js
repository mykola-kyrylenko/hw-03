import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import ImageGalleryApp from './components/ImageGalleryFolder/ImageGalleryApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ImageGalleryApp/>
    {/* <App /> */}

  </React.StrictMode>
);