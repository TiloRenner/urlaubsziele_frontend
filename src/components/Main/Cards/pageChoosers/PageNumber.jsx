import React from 'react'

export default function PageNumber({page, active, setCurrentPage}) {

    function getPage (e) {
        e.preventDefault()
        setCurrentPage(page)
    }

    return (<>
        <li className={`page-item ${active} `}><a className={`page-link ${active ? "text-bg-success border-success" : "link-success"}`} href="#" onClick={getPage}>{page}</a></li>
    </>
    )
}
