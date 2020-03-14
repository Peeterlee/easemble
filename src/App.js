import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import SignUp_Hashtag from './pages/SignUp_Hashtag';
import Dashboard from './pages/Dashboard';
import Hashtags from './pages/Hashtags';
import Home from './pages/Home';
import Pricing_Home from './pages/Princing_Home';
import Pricing_Creditcard from './pages/Pricing_Creditcard';
import Tagged from './pages/Tagged';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/onboarding" component={SignUp_Hashtag}/>
          <Route path="/plans" component={Pricing_Home}/>
          <Route path="/payment" component={Pricing_Creditcard}/>

          {/* Dashboard Pages */}
          <Route path="/" exact component={Dashboard} />
          <Route path="/hashtags"  component={Hashtags} />
          <Route path="/tagged"  component={Tagged} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
