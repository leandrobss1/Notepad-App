import React from 'react'

const CurrentyYear = new Date().getFullYear()

function Footer(){
    return (
        <footer> Copyright © {CurrentyYear}</footer>
    )
}

export default Footer;