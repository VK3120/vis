import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home'; 
import Signin from './pages/Signin'; 


function App() {
  return (
    <AuthContextProvider>
      <div className="relative">
        {/* Video Background */}
        <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/falls.webm" type="video/webm"/>
            {/* Add fallback content here if the video doesn't load */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Your content goes here */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route
              path='/account'
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
          </Routes>
       
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
