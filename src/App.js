import React from 'react';
import { Router, Redirect } from "@reach/router";

import { Header } from "./components/Navbar";
import { Payback } from "./components/Payback";
import { Istream } from "./components/Istream";
import { Footer } from "./components/Footer";
import './App.css';
import './assets/css/open-iconic-bootstrap.css';

function App() {
  return (
    <div className="App">
        <Header />
     <Router>
         <Redirect from="/" to="istream" noThrow />
         <PrivateRoute path="/istream" as={Istream} />
         <PrivateRoute path="/payback" as={Payback} />
         <NotFound default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

const NotFound = () => <div style={{marginTop: "70px"}}><p>Sorry, nothing here</p></div>;

function PrivateRoute(props) {
        let {as: Comp, ...rest} = props;

        return true ? <Comp {...rest} /> : <Redirect to="/auth/login"/>;
}
