import React from 'react'

const CurrentyYear = new Date().getFullYear()

function Footer(){
    return (
        <footer> © {CurrentyYear} Copyright Leoskyw</footer>
    )
}

export default Footer;