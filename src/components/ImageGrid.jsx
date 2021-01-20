import React from 'react'
import Block from 'react-blocks'


const ImageGrid = ({ images }) => {
    const handleOnclick = (e) => {
        console.log(e.target.src)
    }

    return (
        <Block>
            {images.urls.map(item => {
                return (
                    <div onClick={handleOnclick}>
                        <img src={item} alt={item} />
                    </div>
                )
            })}
        </Block>
    )
}

export default ImageGrid