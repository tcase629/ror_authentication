import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route  exact path="/" component={Home} />
      <Route  exact path="/login" component={Login} />
      <Route  exact path="/register" component={Register} />
      <Route component={Nomatch} />
    </Switch>
  </>
) 

export default App;
