import React from 'react'
import {Helmet} from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({title}) => {

    const data = useStaticQuery(graphql`
    query GetMetaData {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `);
    
    return (
        <Helmet>
            <title>{title ? title : null} | {data.site.siteMetadata.title} - {data.site.siteMetadata.tagline}</title>
        </Helmet>
    )
}

export default Seo