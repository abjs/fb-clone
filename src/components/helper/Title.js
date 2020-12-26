import React from 'react'
import { Helmet } from 'react-helmet'
export default function Title({title}) {
    // document.title ={title}
    return (
        <div>
        <Helmet>
        
          <title>{title}</title>
        </Helmet>
        </div>
    )
}
