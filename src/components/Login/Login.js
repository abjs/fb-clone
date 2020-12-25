import React from 'react'
import logorouded from '../Header/images/icon/fb-logo.png'
import txtLogo from './icon/fb-text-logo.png'
import { Button } from '@material-ui/core';
import './Login.css'
export default function Login() {
    const signIn =()=>{
        console.log("Working")
    }
    return (
        <div>
            <img src={logorouded} alt="Fb icons"/>
            <img src={txtLogo} alt="Fb logo"/>
            <Button type="submit" onClick={signIn}></Button>
        </div>
    )
}
