import React, {useEffect, useRef, useState} from 'react';

const ImageComponent = ({primaryImg, secImg}) => {
    const imgRef = useRef(null);

    return (
        <div>
            <img
                ref={imgRef}
                src={primaryImg}
                alt=""
                onMouseOut={() => imgRef.current.src = primaryImg}
                onMouseOver={() => imgRef.current.src = secImg}/>
        </div>
    );
};

export default ImageComponent;
