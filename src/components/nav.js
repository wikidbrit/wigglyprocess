import React from 'react'
import { Link } from "gatsby"

export default function nav() {
    return (
        <div style={{
            width:`100%`,
        }}>
            <ul className="navList" style={{
                display:`flex`,
                margin: `0 auto`,
                maxWidth: 960,
                listStyle: ` none`,
                backgroundColor: `#69C6B3`,
                color: `white`,
                textDecoration: `none`,
            }}>
                <li ><Link to="/" >News</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
            
        </div>
    )
}
