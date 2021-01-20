// APP ROUTER //
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Favourites from '../components/Favourites';
import About from '../components/About';
import Individual from '../components/Individual';

// Main container with the imported sections/pages

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header/>
          <Switch>
            <Route path={'/'} exact><Home /></Route>
            <Route path={'/favourites'}><Favourites /></Route> 
            <Route path={'/about'}><About /></Route>
            <Route path={'/individual'}><Individual /></Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default AppRouter;

