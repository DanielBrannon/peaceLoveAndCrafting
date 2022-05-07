import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout.js';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useStateValue} from './StateProvider'
import Register from './Components/Register/Register';

function App() {

const [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(state)
      if (authUser) {
          dispatch({
            type: 'setUser',
            user: authUser,
            displayName: authUser.displayName,
            email: authUser.email
          })
      } else {
        dispatch({
          type: 'setUser',
          user: null,
          displayName: 'guest'
        })
      }
    })
  }, [])

  return (
      <div className="App">
      <Router>

        <Header />
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path='/checkout' element={<Checkout />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
        </Routes>

      </Router>
      </div>
  );
}

export default App;
