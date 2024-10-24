import { useState } from "react"

export default function Authentication(){
    const [isRegistered , setisRegistered] = useState(false);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [authenticating , setAuthenticating] = useState(false);

    async function Authenticate(){

    }

    return(
        <>
            <h2 className="sign-up-text">{isRegistered ? 'Sign up' : 'Login'}</h2>
            <p>{isRegistered ? 'Create new Account':'sign in to your account'}</p>
            <input placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
            <input placeholder="********" onChange={(e) => {setEmail(e.target.value)}} type="passward"/>
            <button onClick={Authenticate}><p>Submit</p></button>
            <hr />
            <div className="register-content">
                <p>{isRegistered ? 'Already have an account' : 'Don\'t have an account ?'}</p>
                <button onClick={() => {
                    setisRegistered(!isRegistered)
                }}><p>{isRegistered ? 'Sign in' : 'Sign up'}</p></button>
            </div>
        </>
    )
}