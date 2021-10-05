import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Courses from './Component/Courses/Courses';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import Contacts from './Component/Contacts/Contacts';
import Tech from './Component/Tech/Tech';
import "animate.css"

// import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact  path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/tech">
            <Tech></Tech>
          </Route>
          <Route path="/contact">
            <Contacts></Contacts>
          </Route>
         <Route path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
