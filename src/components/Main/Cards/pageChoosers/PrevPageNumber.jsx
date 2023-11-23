import React from 'react'

export default function PrevPageNumber({setCurrentPage, pages}) {

    function prevPage (e) {
        e.preventDefault()
        setCurrentPage((prev) => prev > 1 ? prev-1 : pages)
    }

    return (
        <li className="page-item">
            <a className="page-link link-success" href="#" aria-label="Previous" onClick={prevPage}>
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
    )
}
