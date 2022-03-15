import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import AuthPage from './routes/auth-page/auth-page.component';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }


  render() {
    return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='signin' element={<AuthPage />} />
        </Route>
      </Routes>
    )
  }
}

export default App;
