import { useEffect } from 'react'

export default function DisplayCards({ displayCountryCards, currentPos }) {
    let showCardSet = [displayCountryCards[currentPos]]

    useEffect(() => {
        showCardSet = displayCountryCards[currentPos]
    },[currentPos])

    return (
        showCardSet
    )
}
