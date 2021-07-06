import React from 'react'


import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import About from './pages/about/About';
import Home from './pages/home/Home';
import  Donate from './pages/order/Donate'
import Contact from './pages/contact/Contact'
import Header from './components/Header';




function App() {
  return (
    <Router>
      <Header />
      <main>
       <Switch>
       <Route path ="/" exact>
          <Home />

        </Route>
        <Route path="/about" exact >
            <About />

        </Route>
       
        <Route path ="/contact"> 
        <Contact />

        </Route>
        <Route path="/order" exact>
          <Donate />

        </Route>
        <Redirect />

       </Switch>

      </main>
    </Router>
  );
}

export default App;
