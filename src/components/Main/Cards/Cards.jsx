import React from 'react'
import Card from './Card'
import fetchData from '../../../utils/fetchAPI'
import { useEffect, useState } from 'react';
import CardPages from './CardPages';


export default function Cards() {

    const [countryArray, setCountryArray] = useState([])

    const { VITE_SERVER_DOMAIN } = import.meta.env
    const url2 = `${VITE_SERVER_DOMAIN}cards`

    function handleData(data) {
        console.log(data[0])
        setCountryArray(data)
    }

    useEffect(() => {
        fetchData(url2, handleData)
    }, []);

    function createCards() {
        return countryArray?.map((country) => <Card
            key={country?.name}
            country={country?.name}
            imgId={country?.imagepath_id}
            text={country?.description}
            detailsId={country?.countrydetails_id} />)
    }

    return (
        <CardPages countryCards={createCards()} />
    )
}
