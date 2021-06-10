import './App.css';
import './MyComponents/Header'
import Header from './MyComponents/Header'
import Slider from './MyComponents/Slider'
import { Cards } from './MyComponents/Cards'
import { Footer } from './MyComponents/Footer'
import { About } from './MyComponents/About'


import React, { } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>



      <Router>


        <Switch>
          <Route exact path="/">
            <Header />
            <Slider />
            <Cards />
            <Footer />

          </Route>
          <Route exact path="/about">
          <Header />
         
            <About />
            <Cards />
            <Footer />

          </Route>


        </Switch>

      </Router>








    </>
  );
}

export default App;
