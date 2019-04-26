import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import router from './router.js'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard1 from './Components/Wizard/Wizard1'
import Wizard2 from './Components/Wizard/Wizard2'
import Wizard3 from './Components/Wizard/Wizard3'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrap">
        <Header/>
        <div className="content-container">
          <Switch>
            <Route exact path='/' render={() => <Dashboard/>}/>
            <Route path='/wizard1' render={() => <Wizard1/>}/>
            <Route path='/wizard2' render={() => <Wizard2/>}/>
            <Route path='/wizard3' render={() => <Wizard3/>}/>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
