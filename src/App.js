import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Payment from './Pages/Paymentbatch/Paymentbatch';
import Hometwo from './Pages/Home/Hometwo/Hometwo'
import Homethree from './Pages/Home/Homethree/Homethree';
import Registrationone from './Pages/Studentregistration/Registrationone/Registrationone'
import Registrationtwo from './Pages/Studentregistration/Registrationtwo/Registrationtwo';
import Registrationthree from './Pages/Studentregistration/Registrationthree/Registrationthree';
import Courseapplications from './Pages/Courseapplications/Courseapplications';
import Receipts from './Pages/Receipts/Receipts';
import Studentaccounts from './Pages/Studentaccounts/Studentaccounts';
import Assignments from './Pages/Assignments/Assignments';
import Course from './Pages/Course/Course';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route path='/payment'><Payment></Payment></Route>
          <Route path='/hometwo'><Hometwo></Hometwo></Route>
          <Route path='/homethree'><Homethree></Homethree></Route>
          <Route path='/registrationone'><Registrationone></Registrationone></Route>
          <Route path='/registrationtwo'><Registrationtwo></Registrationtwo></Route>
          <Route path='/registrationthree'><Registrationthree></Registrationthree></Route>
          <Route path='/courseapplications'><Courseapplications></Courseapplications></Route>
          <Route path='/receipts'><Receipts></Receipts></Route>
          <Route path='/studentaccounts'><Studentaccounts></Studentaccounts></Route>
          <Route path='/assignments'><Assignments></Assignments></Route>
          <Route path='/course'><Course></Course></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
