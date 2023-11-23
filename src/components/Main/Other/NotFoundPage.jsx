import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    const currentLocation=window.location.href

    return (
        <div className="container py-4 d-flex align-items-center flex-column">
            <h2 className="h2">404 - NotFoundPage</h2>
            <p>Die URL <i>{currentLocation}</i> wurde auf dieser Website nicht gefunden.   </p>
            <Link className="nav-link active" to="/"><button className='btn'>⮌ Home</button></Link>
        </div>
    )
}
