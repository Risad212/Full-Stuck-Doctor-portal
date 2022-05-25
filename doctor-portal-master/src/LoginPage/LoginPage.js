import { getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { userData } from '../DataStorge/DataStorge';
import { createNewUserEmailPassword, handleGoogleSignIn, initializeLoginFramework, signInWithEmailandpassword } from './LoginManager';
import './LoginPage.scss';



const LoginPage = () => {
   const [newUser, setNewUser] = useState(false)
   const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
   })
   // initialize fameowrk login
   initializeLoginFramework()

   // sign in with google
   const signWithGoogle = () => {
      handleGoogleSignIn()
      .then(res => {
         storgeAuthToken()
      })
   }

    // Redirect hooks
   //[===============================]
   const navigate = useNavigate()


   //[===============================]
    // handle Blur
    const handleBlur = (e) => {
      let isFormValid
      if(e.target.name === 'name'){
         isFormValid = e.target.value
      }
      if(e.target.name === 'email'){
         isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
      }
       if(e.target.name === 'password'){
         const isPasswordValid = e.target.value.length > 8
         const passwordHasNumber = /\d{1}/.test(e.target.value)
         isFormValid = isPasswordValid && passwordHasNumber
       }
       if(isFormValid){
         const newUserInfo = {...user}
         newUserInfo[e.target.name] = e.target.value
         setUser(newUserInfo)
       }
    }


     //[===============================]
     // handle submit
     const handleSubmit = (e) => {
       e.preventDefault()
       if(newUser && user.email && user.password){
           createNewUserEmailPassword(user.name, user.email, user.password)
           .then(res => {
             storgeAuthToken()
           })
       }

       if(!newUser && user.email && user.password){
          signInWithEmailandpassword(user.email,user.password)
          .then(res => {
            storgeAuthToken()
          })
       }
     }


      // set token in sessionStorage
     const storgeAuthToken = () => {
      getAuth().currentUser.getIdToken(true)
      .then(function(idToken) {
          sessionStorage.setItem('token', idToken)
          navigate('/dashboard')
        }).catch(function(error) {
          console.log(error)
      });
   }
   
    return (
        <div id="login">
           <Navbar />
          <div className="container">
             <div className="row">
             <form onSubmit={handleSubmit}>
              {
                newUser ? (
                  <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" name="name" placeholder="Enter Name" onBlur={handleBlur}/>
                </div>
                )
                :
                ''
                }
                  <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onBlur={handleBlur}/>
               </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" name="password" id="exampleInputPassword1" placeholder="Password" onBlur={handleBlur}/>
                 </div>

                 <input type="Submit" value={newUser? 'Submit': 'Log in'}/>
                 <button onClick={signWithGoogle}>Continue With Google</button>
                  <div className='mt-3 text-center'>
                  <p onClick={() => newUser ? setNewUser(false): setNewUser(true)}>
                      {newUser? 'already have an account? Sign In': `New in doctor portal? create an account`}
                  </p>
                  </div>
               </form>
             </div>
         </div>
        </div>
    );
};

export default LoginPage;

