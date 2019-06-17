import React, {useEffect, useRef, useState} from 'react';

const ImageComponent = ({primaryImg, secImg}) => {
    const [inView, setInView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const imgRef = useRef(null);

    useEffect(() =>{
        window.addEventListener('scroll', scrollHandle);
        setInView(isInView());
        setIsLoading(false);
        return(() =>{
            window.removeEventListener('scroll', scrollHandle);
        });
    }, [isLoading]);

    const isInView = () => {
        if(imgRef.current) {
            const rect = imgRef.current.getBoundingClientRect();
            return rect.top>=0 && rect.bottom <= window.innerHeight;
        }
        return false;
    };

    const scrollHandle = () => {
        console.log(isInView());
        const res = isInView();
        setInView(res);
    };

    return isLoading? null: (
        <div>
            <img
                ref={imgRef}
                src={inView? primaryImg: secImg}
                alt=""
                style={{maxWidth: '500px'}}
            />
        </div>
    );

};

export default ImageComponent;
