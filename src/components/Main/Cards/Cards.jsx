import React from 'react'
import Card from './Card'
import fetchData from '../../../utils/fetchAPI'
import { useEffect, useState } from 'react';
import CardPages from './CardPages';


export default function Cards() {

    const [countryArray, setCountryArray] = useState([])

    // Deprecated use of Contentful
    //const {VITE_CF_TOKEN,VITE_SPACE_ID} = import.meta.env;
    //const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard`
    
    const url2 =  `http://localhost:8080/cards`
    
    function handleData(data) {
        console.log(data[0])
        
        setCountryArray(data)
    }

    useEffect(() => {
        fetchData(url2, handleData)
    }, []);

    function createCards () {
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
