import {useState,useEffect} from "react"
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Cakedetails from './components/Cakedetails';
import Search from './components/Search';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import{BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom';
import axios from "axios";
import { connect } from "react-redux";
function App(props) {

  if(localStorage.token && !props.user){
    var token = localStorage.token
    console.log("mean user is already logged in")
    axios({
      url:'https://apibyashu.herokuapp.com/api/getuserdetails',
      method:"get",
      headers:{
        authtoken:token
      }      
  }).then((response)=>{
          props.dispatch({
              type:"CHECK_USER",
              payload:response.data
          })         
  },(error)=>{
      console.log("error from detail api" , error)
  })
  }

  var [users,setUsers]=useState()
  var [loginstatus,setloginstatus]=useState(false)
  function LoginDone(data)
  {
    setUsers(data)
    setloginstatus(true)
  }
  return (
    <div className="App">
     <div className="container-fluid">
      <Router>
        <Header user={users} loginstatus={loginstatus}> </Header>
        <Navbar> </Navbar>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact render={props => <Login informlogin = {LoginDone} />} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/search" exact component={Search} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cakedetails/:cakeid" exact component={Cakedetails} />
            <Route path="/*">
              <Redirect to="/error"> exact component={Error}</Redirect>
            </Route>
          </Switch>  
      </Router> 
     </div>     
    </div>

  );
}

export default connect(function(state,props){
  return{
    user:state?.user
  }
})(App)
