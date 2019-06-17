import React from 'react';
import ImageComponent from "../src/ImageComponent";
import ImageComponentScroll from "../src/ImageComponentScroll";

const ImageScroll = () => {
    return (
        <div>
            <ImageComponentScroll primaryImg='/static/images/one.jpg' secImg='/static/images/two.jpg'/>
            <ImageComponentScroll primaryImg='/static/images/one.jpg' secImg='/static/images/two.jpg'/>
            <ImageComponentScroll primaryImg='/static/images/one.jpg' secImg='/static/images/two.jpg'/>
            <ImageComponentScroll primaryImg='/static/images/one.jpg' secImg='/static/images/two.jpg'/>
            <ImageComponentScroll primaryImg='/static/images/one.jpg' secImg='/static/images/two.jpg'/>
        </div>
    );
};

export default ImageScroll;
