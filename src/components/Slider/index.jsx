import React, { memo, useState, useEffect } from 'react'
import styles from './Slider.module.scss';

const Slider = memo(({ children }) => {

    const [iterator, setIterator] = useState(0);
    const [node, setNode] = useState(null);

    let countScroll = 0;

    const handler = (e) => {
        countScroll++;

        if (countScroll >= 4) {
            const getDirection = (e) => {
                const direction = e.wheelDelta < 0 ? 'down' : 'up';

                console.log(direction);


                if (direction === 'up') {
                    if (iterator === 0) {
                        window.scroll(0, 0);
                        onBlur();
                    } else {
                        setIterator(iterator - 1);
                    }
                }

                if (direction === 'down') {
                    if (iterator === children.length - 1) {
                        window.scroll(0, 2000)
                        onBlur();
                    } else {
                        setIterator(iterator + 1)
                    }
                }

                window.removeEventListener('mousewheel', getDirection);
            };

            window.addEventListener('mousewheel', getDirection);

            countScroll = 0;
        }
    }

    const onFocus = () => document.querySelector('body').style.overflow = 'hidden';
    const onBlur = () => document.querySelector('body').style.overflow = 'inherit';


    return (
        <div className={styles.wrapper}
            // onMouseOverCapture={onFocus}
            // onMouseOutCapture={onBlur}
            onPointerEnter={onFocus}
            onPointerLeave={onBlur}
            onWheelCapture={handler}
        >
            {
                children.map((child, index) => {
                    return (
                        <div className={styles.section} key={index}


                            style={{ transform: `translateY(-${iterator}00vh)` }}
                        >
                            {child}
                        </div>
                    )
                })
            }
        </div >
    )
});

export default Slider
