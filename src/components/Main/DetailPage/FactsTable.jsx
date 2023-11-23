import React, { useEffect, useState } from 'react'
import fetchData from '../../../utils/fetchAPI';

export default function FactsTable({countryID,residents,area}) {

    //TODO Fix too many languages on saving page

    const [countryLanguages,setCountryLanguages] = useState([]);
    const {VITE_CF_TOKEN,VITE_SPACE_ID} = import.meta.env;

    //const id= languages[0].sys.id;
    const id = 0;
    /*useEffect(()=>{
        languages.forEach( element =>{
            const id= element.sys.id;
            const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries/${id}?access_token=${VITE_CF_TOKEN}`
            fetchData(url,handleLanguageData);
        });
    },[]);*/

    function handleLanguageData(languageData)
    {
        setCountryLanguages((prev)=> prev.concat(languageData.fields.name));// Murks, Sinnvoll vorher Anzahl festzulegen
    }

    //const languageElement = countryLanguages?.map(lang => lang +" ")
    const languageElement = "tempString"

    return (
        <table className="table table-striped table-responsive m-0">
            <tbody>
                <tr>
                    <th scope="row" className="col-4">Sprache</th>
                    <td className="col-8" id="selected_dest_language">{languageElement}</td>
                </tr>
                <tr>
                    <th scope="row" className="col-4">Einwohner</th>
                    <td className="col-8" id="selected_dest_population">{residents}</td>
                </tr>
                <tr>
                    <th scope="row" className="col-4">Fläche</th>
                    <td className="col-8" id="selected_dest_area">{`${area} km²`}</td>
                </tr>
            </tbody>
        </table>
    )
}
