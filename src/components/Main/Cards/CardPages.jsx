import React, { useState } from 'react'
import PageNumber from './pageChoosers/PageNumber'
import DisplayCards from "./DisplayCards"
import PrevPageNumber from './pageChoosers/PrevPageNumber'
import NextPageNumber from './pageChoosers/NextPageNumber'

export default function CardPages({ countryCards }) {
    const pages = Math.ceil(countryCards?.length / 6)
    const [currentPage, setCurrentPage] = useState(1)
    const displayCountryCards = []

    for (let p = 1; p <= pages; p++) {
        let currentPageCountries = []
        for (let i = p * 6 - 6; i < p * 6 && i < countryCards.length; i++) {
            currentPageCountries.push(countryCards[i])
        }
        displayCountryCards.push(currentPageCountries)
    }

    function pageNumbers() {
        let pageArray = []
        for (let p = 1; p <= pages; p++) {
            if (p == currentPage) {
                pageArray.push(<PageNumber key={`page ${p}`} page={p} active="active" setCurrentPage={setCurrentPage} />)
            } else {
                pageArray.push(<PageNumber key={`page ${p}`} page={p} setCurrentPage={setCurrentPage} />)
            }

        }
        return (pageArray)
    }


    return (
        <>
            <div className="container py-4">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <PrevPageNumber setCurrentPage={setCurrentPage} pages={pages} />
                        {pageNumbers()}
                        <NextPageNumber setCurrentPage={setCurrentPage} pages={pages} />
                    </ul>
                </nav>
                <div className="row row-cols-2 row-cols-md-3 g-3">
                    <DisplayCards displayCountryCards={displayCountryCards} currentPos={currentPage - 1} />
                </div>
            </div>
        </>
    )
}
