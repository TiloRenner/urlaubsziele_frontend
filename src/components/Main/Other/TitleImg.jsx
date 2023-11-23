import React from 'react'

export default function TitleImg() {
    return (
        <div className=" text-center bg-image mb-1" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')", height: "400px", backgroundSize: "cover" }} id="Über uns">
            <div className="mask h-100 w-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">URLAUBSZIELE.DE</h1>
                        <h4 className="mb-3">die schönsten Urlaubsziele ... hilfreiche Reisetipps ... Empfehlungen.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
