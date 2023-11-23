import React from 'react'

export default function NextPageNumber({setCurrentPage, pages}) {

    function nextPage (e) {
        e.preventDefault()
        setCurrentPage((prev) => prev < pages ? prev+1 : 1)
    }


    return (
        <li className="page-item">
            <a className="page-link link-success" href="#" aria-label="Next" onClick={nextPage}>
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    )
}
