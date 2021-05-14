import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (props) => {
    return (
        <div>
            <Link to="/login">LOGIN</Link>
            <Link to="/dashnoard">DASH</Link>

        </div>
    )
}

export default Landing

