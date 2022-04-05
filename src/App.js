import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './Components/Header';
import Forms from './Components/Forms';
import Sliders from './Components/Sliders';
import NewsSection from './Components/NewsSection';
import Apply from './Components/Apply';
import University from './Components/University';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />

      {/* <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div> */}
     <Header/>
     <Forms/>
     <Sliders/>
      <NewsSection/>
     <Apply/>
       <University/>
      <Footer/> 
    </Router>
  </>
  );
}

export default App;
