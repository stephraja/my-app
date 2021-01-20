import React from 'react'
import Block from 'react-blocks'


const ImageGrid = ({ images }) => {
    return (
        <Block>
            {images.urls.map(item => {
                return <img src={item} alt={item} />
            })}
        </Block>
    )
}

export default ImageGrid