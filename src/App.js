import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Requests from './pages/Requests'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/requests' component={Requests} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
