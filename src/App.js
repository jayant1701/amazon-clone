import React ,{useEffect} from 'react'
import './App.css';
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const publicKey='pk_test_51HhIeZIDi3sfyKBb7wkspaxxCReMVktGiJHRQyIfKeu8DzH0sSPDpilpR7OuAA2hTS8iUsTiAtfxFBhg4Jyb2W1X00ws053rtS';
const promise=loadStripe(publicKey);

function App() {

  const[{},dispatch]=useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders/>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
