import React from 'react'
import './Header.css'

export default function Header()  {
    return(
        <div className='header-bar'>
            <div className='alignment-container'>
                <img className='houser-logo'
                src='https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/houser_logo.png'
                alt='houser logo'/>
                <h1 className='header-title'>Houser</h1>
            </div>
        </div>
    )
}