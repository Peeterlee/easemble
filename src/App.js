import React, {useState} from 'react';
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
  const [postPopupDisplay, setPostPopupDisplay] = useState('none');
  return (


    <div className="App">
      <Router>
        <Switch>
          <Route path="/onboarding" component={SignUp_Hashtag}/>
          <Route path="/plans" component={Pricing_Home}/>
          <Route path="/payment" component={Pricing_Creditcard}/>
          <Route exact={true} path ="/" render={()=>{ return (<Dashboard setPostPopupDisplay={setPostPopupDisplay} postPopupDisplay={postPopupDisplay} /> )}} />
          <Route path ="/hashtags" render={()=>{ return (<Hashtags setPostPopupDisplay={setPostPopupDisplay} postPopupDisplay={postPopupDisplay} /> )}} />
          <Route path ="/tagged" render={()=>{ return (<Tagged setPostPopupDisplay={setPostPopupDisplay} postPopupDisplay={postPopupDisplay} /> )}} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
