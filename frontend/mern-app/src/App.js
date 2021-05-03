import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './components/HomePage'
import PostAdPage from './components/PostAdPage';
import ViewAd from './components/ViewAd';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/insertAd"><PostAdPage/></Route>
          <Route path="/show-one/:id" render={props => <ViewAd {...props}/>}/>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
