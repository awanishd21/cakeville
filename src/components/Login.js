import {useState,useEffect} from "react"
import axios from "axios"
import { Link ,withRouter} from "react-router-dom"

import { connect } from "react-redux";
function Login(props)
{

    useEffect(()=>{
       
    },[])
	
    var [errorMessage,setErrorMessage]=useState()

    var [user,setUser]=useState({})
    var [formerrors,setFormerrors]=useState({})

    let getEmail=(event)=>
    {
        setUser({
            ...user,
            email:event.target.value,
            //password:user.password,
        })
        
    	user.email = event.target.value
    }
    let getPassword=(event)=>
    {
        setUser({
            // email:user.email,
            ...user,
            password:event.target.value,
        })
        
    	user.password = event.target.value
    }

   var validate=function(elements)
   {
      var errors={}
      if(!elements.email.value)
      {
        errors.email="Email is Required"
      }
      if(!elements.password.value)
      {
        errors.password="Password is Required"
      }
      var errorkeys=Object.keys(errors)
      if(errorkeys.length>0)
        return errors
      else
        return false
   }

    let login = (event)=>{
        event.preventDefault();
        var form=document.getElementById('loginform')
          console.log("form element in this",form.elements,form.controls)
        var errors=validate(form.elements)
        if(errors)
        {
            setFormerrors(errors)
        }else{
            setFormerrors({})
            let apiurl="https://apibyashu.herokuapp.com/api/login"
           axios({
                url:apiurl,
                method:"post",
                data:user
           }).then((response)=>{
              console.log("Response from Login api",response.data)
              if(response.data.token)
              {
                localStorage.token=response.data.token
                localStorage.email=response.data.email
                setErrorMessage(response.data.message)
                props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                }) 
                props.history.push("/")
              }else
              {
                setErrorMessage("Invalid Login")
              }
           },(error)=>{
              console.log("Error from Login api",error)  
           })
        }       
    }
	
		return(
          <div className="d-flex flex-column justify-content-center mt-5">
            <form id="loginform" className="w-50 mx-auto">  
                <div className="form-group">
                 <input type="email" name="email" placeholder="Email" class="form-control" onChange={getEmail}></input>
                </div>
              {formerrors?.email && <div className="alert alert-danger">{formerrors.email}</div>}  
                <div className="form-group">
                <input type="password" name="password" placeholder="Password" class="form-control" onChange={getPassword}></input>
                </div>
              {formerrors?.password && <div className="alert alert-danger">{formerrors.password}</div>}   
              {errorMessage && <div className="alert alert-info"> {errorMessage} </div>}
                <div className="float-left">
                  <Link to="/signup">New User! Click Here</Link>
                </div>
                <div className="float-right">
                  <Link to="/forgot">Forgot Password</Link>
                </div>
                <button className="btn btn-primary" onClick={login}>Login</button>
            </form>
            </div>
		)
	
}

Login = withRouter(Login)
  export default connect(function(state,prop){  
})(Login)