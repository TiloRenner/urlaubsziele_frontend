import React, { useState, useEffect } from 'react'
import fetchData from '../../../utils/fetchAPI';
import { NavLink } from 'react-router-dom';

export default function Card({ country, imgId, text, detailsId }) {
    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;
    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/${imgId}?access_token=${VITE_CF_TOKEN}&w=100`;
    const [imgUrl, setImgUrl] = useState("")

    function handleData(data) {
        setImgUrl(data.fields.file.url + "?fm=webp&h=400")
    }

    useEffect(() => {
        fetchData(url, handleData)
    }, []);

    return (
        <>
            <div className="col">
                <div className="td_selector card h-100 shadow border-light active" style={{ overflow: "hidden" }}>
                    <NavLink to={`/detailPage/${detailsId}`} className="link-dark link-underline link-underline-opacity-0">
                        <img src={imgUrl} alt="" className="card-img-top object-fit-cover" style={{ height: "30vh", minHeight: "4em" }} />
                        <div className="card-img-overlay d-md-none text-center text-bg-dark bg-opacity-50" style={{ height: "10vh", minHeight: "2em", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h2><strong>{country}</strong></h2>
                        </div>
                        <div className="card-body d-none d-md-block">
                            <h2 className="card-title">{country}</h2>
                            <p className="card-text">
                                {text}
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}