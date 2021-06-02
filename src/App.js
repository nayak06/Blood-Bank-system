import './components/design/App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Stock from './components/SearchStock'
import Profile from './components/Profile'
import Login from './components/LoginModal'
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
