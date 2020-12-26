import React from 'react';
import { auth, googleAuth } from '../helper/firebase.js'
// import logorouded from '../Header/images/icon/fb-logo.png'
import newLogo from './icon/sar.jpg'
// import txtLogo from './icon/fb-text-logo.png'
import { Button } from '@material-ui/core';
import { useStateValue } from './helpers/Provider'
import { actionTypes } from './helpers/reducer'
import './Login.css'
export default function Login() {
    // const [state,dispatch] = useStateValue();
    const [, dispatch] = useStateValue();
    const signInGoogle = () => {
        auth.signInWithPopup(googleAuth)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
                // console.log(result);
                // if(result.additionalUserInfo.profile.verified_email){
                //     console.log(result.additionalUserInfo.profile.email)
                //     console.log(result.additionalUserInfo.profile.name)
                //     console.log(result.additionalUserInfo.profile.picture)
                //     console.log(result.additionalUserInfo.profile.verified_email)
                //     console.log(result.additionalUserInfo.isNewUser)
                //     console.log(result.additionalUserInfo.isNewUser)  
                // }
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            })


    }
    return (
        <div className="login">
            <div className="login_log">
                <img className="img1" src={newLogo} alt="Fb icons" />
                {/* <img className="img2" src={txtLogo} alt="Fb logo" /> */}
            </div>

            <Button type="submit" onClick={signInGoogle}> Sign In Google</Button>
            {/* <Button type="submit" onClick={signInEmail}> Sign In  Email</Button> */}

        </div>
    )
}