import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header";
import { Payback } from "./components/Payback";
import { Istream } from "./components/Istream";
import { Footer } from "./components/Footer";
import './App.css';
import './assets/css/open-iconic-bootstrap.css';

function App() {
  return (
    <div className="App">
     <Router>
         <Header />
         <PrivateRoute path="/istream" component={Istream} />
         <PrivateRoute path="/payback" component={Payback} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}
