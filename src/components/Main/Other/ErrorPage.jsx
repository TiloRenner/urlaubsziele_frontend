import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage({errorText}) {

    return (
        <div className="container py-4 d-flex align-items-center flex-column">
            <h2 className="h2">Statusbericht DetailPage</h2>
            <p>{errorText}</p>
            <Link className="nav-link active" to="/"><button className='btn'>⮌ Home</button></Link>
        </div>
    )
}
