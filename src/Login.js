import React,{useState}from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth,db} from './firebase'

function Login() {

    const history=useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const signIn = (e)=>{
            e.preventDefault()

            auth.signInWithEmailAndPassword(email,password)
                .then(auth=>{
                    history.push('/')
                })
                .catch(error => alert(error.message))
    }

    const signUp = (e)=>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            }) 
            .catch(error=>alert(error.message))


    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg'
                    />
            </Link>    
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                           type='text' 
                           value={email}onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input 
                           type='password' 
                           value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button
                        type='submit' 
                        className='login__signInButton'
                        onClick={signIn}>
                        Sign In
                    </button>
                </form>
                <p>
                     This is an amazon clone, authenticated via google firebase
                    .We will not have access to your password,the intent of This
                    clone is purely educational.
                </p>
                <button 
                    className='login__signUpButton'
                    onClick={signUp}>
                    Sign Up
                </button>
            </div>   
        </div>
    )
}

export default Login
