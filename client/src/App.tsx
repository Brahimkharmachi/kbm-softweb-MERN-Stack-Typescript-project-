import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import './App.css'
import ColorSchemesExample from "./Component/Headers/Header";
import Home from "./Component/Homes/Home";
import Footer from "./Component/Footers/Footer";
import About from "./Component/Pages/Abouts/About";
import Service from "./Component/Pages/Services/Service";
import Contact from "./Component/Pages/Contacts/Contact";
export default function App() {
  return (


    <Router>
      <ColorSchemesExample />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}
