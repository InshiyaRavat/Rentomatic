import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Property from './Property';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import InfoUser from './InfoUser';

const App = () => {
  return (
    <>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/service" Component={Service} />
      <Route exact path="/property" Component={Property} />
      <Route exact path="/about us" Component={About}/>
      <Route exact path="/contact us" Component={Contact}/>
      <Route exact path="/login" Component={Login}/>
      <Route exact path="/register" Component={Register}/>
      <Route exact path="/infoUser" Component={InfoUser}/>
      <Route exact path="/" Component={Home}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
