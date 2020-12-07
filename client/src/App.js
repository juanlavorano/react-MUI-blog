import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.component'
import Footer from './components/Footer/Footer.component'
import MainPage from './components/MainPage/MainPage.component'
import Login from './components/Login/Login.component'
import Register from './components/Register/Register.component'
import CreatePost from './components/Create Post/CreatePost.component'
import { AuthProvider } from './context/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='screen'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/posts/create' component={CreatePost} />
          </Switch>
          <Footer />
        </div >
      </Router>
    </AuthProvider>
  );
}

export default App;
