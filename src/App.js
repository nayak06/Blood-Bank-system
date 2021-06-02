import './App.css';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Stock from './SearchStock'
import Profile from './Profile'
import Login from './LoginModal'
import { Route, BrowserRouter, Link } from 'react-router-dom'


function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/stock' component={Stock} />
        <Route exact path='/profile' component={Profile} />
      </BrowserRouter>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
