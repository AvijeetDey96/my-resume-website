import React,{useEffect,useState} from 'react';
import './App.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/pages/Home/Home.js'
import Projects from './components/pages/Projects/Projects.js'
import About from './components/pages/About/About.js'
import Resume from './components/pages/Resume/Resume.js'
import NavBar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Preloader from './components/common/Pre'
import ScrollToTop from './components/common/ScrollToTop'


function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
