import React from 'react'
import { useState } from 'react';
import fetchData from '../../utils/fetchAPI';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {

    //https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}&query={value}

    const[searchValue,setSearchValue] = useState("");
    const[searchResult,setSearchResult] = useState({data:null,timeStamp:Date.now()});
    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;
    const navigate = useNavigate();

    function handleInput(input)
    {
        const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&query=${input}`
            setSearchValue(input)
            fetchData(url,handleSearchResult)
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        navigate(`searchPage/${searchValue}`);
    }

    function handleSearchResult(_data,timeStamp)
    {
        if(timeStamp > searchResult.timeStamp)
        {
            setSearchResult({data: _data,timeStamp:timeStamp});
        }
        else{
            console.log("Old request,Discard Results",_data, "NewTime:", timeStamp,"OldTime:", searchResult.timeStamp);
        }
    }

    return (
            <>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" onChange={e => handleInput(e.target.value)} value={searchValue} type="search" placeholder="Urlaubsziel suchen" aria-label="search" id="datatable-search-input" />
            <button className="btn btn-outline-success fw-medium" type="submit">Suchen</button>
            </form>
            </>
    )
}
