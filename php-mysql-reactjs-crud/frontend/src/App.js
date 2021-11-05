import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';

function App() {
  return (
    <div>
        <Router>
             <HeaderComponent />
              <div className="container">
               <Switch> 
                  <Route path = "/" exact component = {ListUserComponent}></Route>
                  <Route path = "/users" component = {ListUserComponent}></Route>
                  <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
                  <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
                </Switch>
               </div>
            <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
