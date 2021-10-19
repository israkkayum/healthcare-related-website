import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Header/Header';
import Register from './Pages/Login/Register/Register';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Details from './Pages/Details/Details';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Doctors from './Pages/Doctors/Doctors';
import AboutUs from './Pages/AboutUs/AboutUs';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>

<AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path = "/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path ="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path ="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
