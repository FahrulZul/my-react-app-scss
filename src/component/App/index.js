import './styles.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../Home'
import ProfileCard from '../ProfileCard'
import ArticlePreview from '../ArticlePreview';

function App() {

    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/'><Home/></Route>
          </Switch>
          <Switch>
            <Route exact path='/profile-card'><ProfileCard/></Route>
          </Switch>
          <Switch>
            <Route exact path='/article-preview'><ArticlePreview/></Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;
