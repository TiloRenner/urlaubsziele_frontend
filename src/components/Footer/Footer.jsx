import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className=" py-4 my-4">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6>URLAUBSZIELE.DE</h6>
                            <p>Wir stellen Ihnen die schönsten Urlaubsziele vor. Erhalten Sie hilfreiche Reisetipps und Empfehlungen.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6>Kontakt</h6>
                            <p>Sonnenallee 1,<br />12346 Traumstrand</p>
                            <p className="mb-0">info@example.com</p>
                            <p className="mb-0">+ 49 234 567 88</p>
                            <p>+ 49 234 567 89</p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <form>
                                <h5>Abonniere unseren Newsletter</h5>
                                <p>Jeden Monat neue und spannende Reiseziele.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
                <p>&copy; 2023 URLAUBSZIELE.DE. All rights reserved.</p>
            </div>
        </footer>
    )
}
