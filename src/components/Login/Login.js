import React from 'react'
import logorouded from '../Header/images/icon/fb-logo.png'
import txtLogo from './icon/fb-text-logo.png'
import { Button } from '@material-ui/core';
import './Login.css'
import {auth,googleAuth} from './helpers/firebase.js'

export default function Login() {
    const signInGoogle = () => {
       auth.signInWithPopup(googleAuth)
       .then(r=>console.log(r))
       .catch(err=>alert(err.message))

    }
    // const signInEmail= () => {
    //     auth.signInWithPopup(email)
    //     .then(r=>console.log(r))
    //     .catch(err=>alert(err.message))
 
    //  }
    return (
        <div className="login">
            <div className="login_log">
                <img className="img1" src={logorouded} alt="Fb icons" />
                <img className="img2" src={txtLogo} alt="Fb logo" />
            </div>

            <Button type="submit" onClick={signInGoogle}> Sign In Google</Button>
            {/* <Button type="submit" onClick={signInEmail}> Sign In  Email</Button> */}

        </div>
    )
}
