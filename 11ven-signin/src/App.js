import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';

import Navigation from './routes/navigation/navigation.component';
import AuthPage from './routes/auth-page/auth-page.component';
import LandingPage from './routes/landing-page/landing-page.component';
import Dashboard from './routes/dashboard/dashboard.component';
import axios from 'axios';

const App = () => {

  const handleGoogleLogin = (response) => {
    console.log(response.email_verified)

    axios.post('http://127.0.0.1:5000/signup',
    {
      "displayName": response.name,
      "email": response.email,
      "password": "123"
    }
    )
    .then(res => {
      if (res.status === 200){
        axios.post('http://127.0.0.1:5000/login',
        {
          "email": response.email,
          "password": "123",
        }
        )
        .then(r => console.log(r))
        .catch(e => console.log(e))
      }
    })
    .catch(err => console.log(err))
  }

  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: async (response) => {
      console.log(response)
      await handleGoogleLogin(response);
    },
    googleAccountConfigs: {
      client_id: '1095148420016-ent1fe3vn2m3ukjkqh812s8v8a2ug8k7.apps.googleusercontent.com',
    },
  });

  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='authpage' element={<AuthPage />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
  
} 



export default App;
