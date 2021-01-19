// External 
import React from 'react';
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

// Style
import './App.css';

// Components
import Navbar from './components/navbar/navbar.component'
import HomePage from './pages/home/home.component'
import AboutPage from './pages/about/about.component'
import ArtistPage from './pages/artist/artist.component'

function App() {

  return (
      <div>
      
        <Router>
            <Route component={Navbar} />
            <Switch> 
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/artist' component={ArtistPage} />
            </Switch>
        </Router>
    </div>
  );
}

 

export default App;


// Add an artist page

