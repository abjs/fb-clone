import React from 'react'
export default function Image({image,dis="image"}) {
    return (
        <div>
            {image && <img src={image} alt="dis"/> }
        </div>
    )
}
