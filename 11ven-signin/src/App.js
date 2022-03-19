import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';

import Navigation from './routes/navigation/navigation.component';
import AuthPage from './routes/auth-page/auth-page.component';

const App = () => {

  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: response => console.log(response),
    googleAccountConfigs: {
      client_id: '1095148420016-ent1fe3vn2m3ukjkqh812s8v8a2ug8k7.apps.googleusercontent.com',
      // login_uri: 'http://localhost:3000/signin'
    },
  });

  return(
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route path='signin' element={<AuthPage />} />
    </Route>
  </Routes>
  )
  
} 



export default App;
