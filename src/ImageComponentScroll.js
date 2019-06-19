import React, {useEffect, useRef, useState} from 'react';
import _ from 'lodash';

let num = 0;
const ImageComponent = ({primaryImg, secImg}) => {
    const [inView, setInView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const imgRef = useRef(null);

    useEffect(() =>{
        // window.addEventListener('scroll', scrollHandle);
        // window.addEventListener('scroll', debounce(scrollHandle, 1000));
        /*限流,一百毫秒内只会执行一次,滚动的时候也会检查位置,只是检查位置没有那么频繁*/
        window.addEventListener('scroll', _.throttle(scrollHandle, 100));
        /*debounce用在这是为了滚动的时候不去检查位置,滚动完成的时候检查位置*/
        // window.addEventListener('scroll', _.debounce(scrollHandle, 30));
        // const res = isInView();
        // setInView(res);
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

    const debounce = (fn, time=1000) => {
        let timer = null;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(fn, time)
        }
    };
    const scrollHandle = () => {
        // num++;
        // console.log(num);
        setInView(isInView());
    };

    return isLoading? null: (
        <div>
            <img
                ref={imgRef}
                src={inView? primaryImg: secImg}
                alt=""
                style={{height: '300px'}}
            />
        </div>
    );

};

export default ImageComponent;
