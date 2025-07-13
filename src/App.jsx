import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

// import Home from './pages/home';

import UserUploadComponent from './crud/UserUploadComponent';

import CartPages from './components/Cart/CartPages';

import { ContextProvider } from './components/Cart/ContextProvider';

import NotFound from './pages/notFound';

const App = () => {
  return (
    <div>
      <ContextProvider>

          <Router>
      <Routes>
        {/* <Route index element={<Home/>}/> */}
        <Route path='/' index element={<UserUploadComponent />}/>
        <Route path='/osas/*' element={<CartPages />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

     </Router>
      </ContextProvider>
    </div>
  )
}

export default App
