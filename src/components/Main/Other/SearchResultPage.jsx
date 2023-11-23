import { useEffect,useState } from "react";
import fetchData, { fetchDataMulti } from "../../../utils/fetchAPI";
import { useParams } from "react-router-dom";
import Head from '../../../utils/Head';
import Card from "../Cards/Card";
import CardPages from "../Cards/CardPages";

export default function SearchResultPage()
{

    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;
    const [searchResults, setSearchResults] = useState([]);

    const { searchTerm } = useParams();
    //const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&query=${searchTerm}`
    const urlDetails = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryDetails&query=${searchTerm}`
    const urlCards = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&query=${searchTerm}`

    let cardDataFetchedItems =[];

    useEffect(()=> {
        fetchDataMulti([urlDetails,urlCards],handleSearchResults)
    },[searchTerm])

    function handleSearchResults(data)
    {
        const detailData = data[0];
        const cardData = data[1];
        let leftoverCountries = []
        if(detailData.items.length > 0 && cardData.items.length > 0)
        {
        //Build Array with Countries for which i dont also have a CountryCard Data already, then use CountryDetail ID to find Card Data
            leftoverCountries = detailData.items.reduce(function(totalArray,currentCountry){
                let matched = false;
                for(let i = 0; i< cardData.items.length; i++)
                {
                    if(currentCountry.sys.id == cardData.items[i].fields.details.sys.id)
                    {
                        matched = true;
                        break;
                    }
                }
                if(!matched)
                {
                    totalArray.push(currentCountry);                
                }
                return totalArray;
            },[]);

        }
        else if(detailData.items.length > 0)
        {
            detailData.items.forEach(country => {
                leftoverCountries.push(country)
            });
        }

        if(cardData.items.length > 0)
        {
            cardData.items.forEach(country => {
                cardDataFetchedItems.push(country)
            });  
        }



        //If More Countries to fetch do that and update state later, else Update State Now
        // Build array of fetch URLS, looking for matching ID from Details in CountryCards fields.details.sys.id
        if(leftoverCountries.length > 0)
        {
            const urls = leftoverCountries.map(country => {
                const detail_Id = country.sys.id
                const baseUrlCardsMissing = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&fields.details.sys.id[match]=${detail_Id}`
                return baseUrlCardsMissing;
            });
            fetchDataMulti(urls,handleDataLeft);
        }
        else 
        {
            setSearchResults(cardDataFetchedItems);
        }
    }

    function handleDataLeft(data)
    {
        //Kombiniere mit zuerst gefundenen Cards Items
        data.forEach(element => {
            cardDataFetchedItems.push(element.items[0])
        });
        setSearchResults(cardDataFetchedItems);
    }



    function createCards () {

            return searchResults?.map((country) => <Card
            key={country?.fields.name}
            country={country?.fields.name}
            imgId={country?.fields.image.sys.id}
            text={country?.fields.teaserText}
            detailsId={country?.fields.details.sys.id} />)
        

    }

    function noResults()
    {
        return(
        <>
        <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {searchTerm ? <div>Keine Ergebnisse für {searchTerm} </div> : <div>Kein Suchbegriff eingegeben </div>  }

                </div>
            </div>
        </div>
        </>)

    }

    return (
        <>
            <Head title={`Suchergebnisse ${searchTerm}`} descr={`Suchergebnisse für: ${searchTerm}`} />
            <div>
            {searchResults.length ? <CardPages countryCards={createCards()} /> : noResults()  }
            </div>

        </>

        
        )
}