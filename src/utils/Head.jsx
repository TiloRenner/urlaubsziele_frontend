import React from "react";
import { Helmet } from "react-helmet";

export default function Head ({title, descr, keywords}) {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={descr} />
            <keywords />
        </Helmet>
    )
}