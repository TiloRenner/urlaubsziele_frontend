import React from 'react'
import SearchBar from './SearchBar'
import { HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import fetchData from '../../utils/fetchAPI';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;

    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/2Hqzvhz0dtS6jzvpvizZGu?access_token=${VITE_CF_TOKEN}`

    const [logoURL, setLogoURL] = useState();
    const [displayItems, setDisplayItems] = useState("collapse")

    useEffect(() => {


        fetchData(url, handleLogoURL)
    }, []);

    function handleLogoURL(data) {
        setLogoURL(data.fields.file.url);
    }

    function toggleDisplay(e) {
        e.preventDefault()
        setDisplayItems((prev) => prev == "collapse" ? "" : "collapse")
    }


    return (
        <header>
            <nav id="page_top" className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
                <div className="container-fluid container mx-auto justify">
                    <NavLink className="nav-link active" to="/">
                        <img src={logoURL} alt="Logo" width="100" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleDisplay}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${displayItems} navbar-collapse`} id="navbarTogglerDemo03">
                        <ul className="container navbar-nav align-items-center">
                            <li className="nav-item">
                                <HashLink className="nav-link active" to="/#overview">Urlaubsziele</HashLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Über uns">Über uns</a>
                            </li>
                        </ul>
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </header >
    )
}
