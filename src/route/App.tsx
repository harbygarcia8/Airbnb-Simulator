import store from '../redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AirbnbPage from '../pages/AirbnbPage';
import "../styles/App.scss"
function App() {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AirbnbPage />} />
          </Routes>
        </BrowserRouter>

      </Provider>
    </React.StrictMode>
    
  )
}

export default App
