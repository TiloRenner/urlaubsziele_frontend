import React, { useEffect, useRef } from 'react'
import Cards from './Cards/Cards'
import TitleImg from './Other/TitleImg'
import Head from '../../utils/Head'

export default function Main() {

    const overview_ref = useRef()

    useEffect(() => {
        if (window.location.hash == "#overview") {
            setTimeout(() => {
                overview_ref.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }, 100)
        }
    }, [])

    return (
        <main>
            <Head title="URLAUBSZIELE" descr="Wir präsentieren Ihnen Urlaubsziele aus aller Welt" />
            <TitleImg />
            <div id="overview" ref={overview_ref}>
                <Cards />
            </div>
        </main>
    )
}
