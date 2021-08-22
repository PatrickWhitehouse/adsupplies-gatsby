import React from 'react'
import { Global, css } from "@emotion/react"

const Layout = ({children}) => {
    return (
        <>
        <Global styles={css`
        * {
            box-sizing: border-box;
        }

         body{
             font-family: "Inter", sans-serif;
             font-weight: 400;
             margin: 0;
             position: relative;
             scroll-behavior: smooth;
             line-height: 1.5;
         }
         body, main{
            padding: 15px;
         }
         main{
             max-width: 1024px;
             width: 100%;
             margin: 0 auto;
         }
         h1,h2,h3,h4,h5,h6{
             font-weight: 700;
         }
         a, a:link {
             text-decoration: none;

         }

        `}/>
            {children}
        </>
    )
}

export default Layout; 