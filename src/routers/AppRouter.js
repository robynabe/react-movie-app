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
            <Route path={'/'} exact><Home sort={'popular'} /></Route>
            <Route path={'/sort/popular'} exact><Home sort={'popular'} /></Route>
            <Route path={'/sort/top-rated'} exact><Home sort={'top_rated'} /></Route>
            <Route path={'/sort/now-playing'} exact><Home sort={'now_playing'} /></Route>
            <Route path={'/sort/upcoming'} exact><Home sort={'upcoming'} /></Route>
            <Route path={'/favourites'}><Favourites /></Route> 
            <Route path={'/about'}><About /></Route>
            <Route path={'/individual/:id'}><Individual /></Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default AppRouter;

