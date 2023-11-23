import React from 'react'
import Card from './Card'
import fetchData from '../../../utils/fetchAPI'
import { useEffect, useState } from 'react';
import CardPages from './CardPages';


export default function Cards() {

    const [countryArray, setCountryArray] = useState([])
    const {VITE_CF_TOKEN,VITE_SPACE_ID} = import.meta.env;

    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard`
    const urlAPI = `http://localhost:8080/test`

    function handleData(data) {
        setCountryArray(data.items)
    }

    function handleHello(data)
    {
        console.log("ResponseAPI:", data);
    }

    useEffect(() => {
        fetchData(url, handleData)
        fetchData(urlAPI, handleHello)
    }, []);

    function createCards () {
        return countryArray?.map((country) => <Card
                    key={country?.fields.name}
                    country={country?.fields.name}
                    imgId={country?.fields.image.sys.id}
                    text={country?.fields.teaserText}
                    detailsId={country?.fields.details.sys.id} />)
    }


    return (
                <CardPages countryCards={createCards()} />
    )
}
