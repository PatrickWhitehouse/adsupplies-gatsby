import React from 'react'
import {Helmet} from 'react-helmet'

const Seo = ({title}) => {
    return (
        <Helmet>
            <title>{title ? title : null} - AD Supplies</title>
        </Helmet>
    )
}

export default Seo