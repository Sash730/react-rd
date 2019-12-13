import React from 'react';
import { Router, Redirect } from "@reach/router";

import NavBar from "./components/Navbar";
import { Payback } from "./components/Payback";
import { Istream } from "./components/Istream";
// import { Footer } from "./components/Footer";
import Container from "@material-ui/core/Container";
import './App.css';
// import './assets/css/open-iconic-bootstrap.css';

const menuItems = [
    {state: '/istream', title: 'iStream', submenuitems: null},
    {state: '/loyalty', title: 'loyalty', submenuitems: null},
    {state: '/payback', title: 'payback', submenuitems: null},
    {state: '/schedule', title: 'schedule', submenuitems: null},
    {state: '/batchman', title: 'batchman', submenuitems: null},
    {state: '/dictionary', title: 'dictionary', submenuitems: null},
];

function App() {

  return (
      <>
      {/*<CssBaseline />*/}
      <Container maxWidth="lg">
        <NavBar sections={menuItems}/>
    {/*<main>*/}
        <div className="App">
         <Router>
             {/*<Redirect from="/" to="istream" noThrow />*/}
             <PrivateRoute path="/istream" as={Istream} />
             <PrivateRoute path="/payback" as={Payback} />
             <NotFound default />
          </Router>
        </div>
    {/*</main>*/}
          {/*<Footer />*/}
    </Container>
    </>
  );
}

export default App;

const NotFound = () => <div style={{marginTop: "70px"}}><p>Sorry, nothing here</p></div>;

function PrivateRoute(props) {
        let {as: Comp, ...rest} = props;

        return true ? <Comp {...rest} /> : <Redirect to="/auth/login"/>;
}
