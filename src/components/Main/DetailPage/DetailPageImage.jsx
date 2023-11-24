import { useEffect, useState } from "react";
import fetchData from "../../../utils/fetchAPI";

export default function DetailPageImage({ fileName, classname, htmlID, alt, style, setImgBorderColor, setContainerBorderColor }) {
    const [imgURL, setImgURL] = useState();

    const { VITE_CF_TOKEN, VITE_SPACE_ID, VITE_SIGHTENGINE_USER, VITE_SIGHTENGINE_SECRET } = import.meta.env;
    //const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/${assetID}?access_token=${VITE_CF_TOKEN}`

    useEffect(() => {
        //fetchData(url, handleAssetData)
    }, []);

    function handleAssetData(assetData) {
        //setImgURL(assetData.fields.file.url)
    }

    function handleColorData(data) {
        if (data?.colors) {
            setImgBorderColor(data?.colors.dominant.hex)
            if (data.colors.accent) {
                setContainerBorderColor(`${data.colors.accent[0].r}, ${data.colors.accent[0].b}, ${data.colors.accent[0].g}`)
            } else {
                setContainerBorderColor(`${data.colors.other[0].r}, ${data.colors.other[0].b}, ${data.colors.other[0].g}`)
            }
        }

    }

useEffect(() => {
    if (imgURL && setContainerBorderColor) {
        const url2 = `https://api.sightengine.com/1.0/check.json?url=https:${imgURL}&models=properties&api_user=${VITE_SIGHTENGINE_USER}&api_secret=${VITE_SIGHTENGINE_SECRET}`
        fetchData(url2, handleColorData)
    }
}, [imgURL])

return (
    <>
        <img src={fileName} className={classname} id={htmlID} alt={alt} style={style} />
    </>


)


}