import React from 'react'
import logorouded from '../Header/images/icon/fb-logo.png'
import txtLogo from './icon/fb-text-logo.png'
import { Button } from '@material-ui/core';
import './Login.css'
import {auth,googleAuth} from './helpers/firebase.js'
import {actionTypes} from './helpers/Reducer'
import { useStateValue } from './helpers/StatePrivider'
export default function Login() {
    const [state,dispatch] = useStateValue();

    const signInGoogle = () => {
       auth.signInWithPopup(googleAuth)
       .then((result)=>{        
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
       
       })
        
       .catch(err=>alert(err.message))
       
    }
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
