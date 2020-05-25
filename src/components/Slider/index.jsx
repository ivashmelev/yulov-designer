import React, { memo, useState, useEffect } from 'react'
import styles from './Slider.module.scss';

const Slider = memo(({ children }) => {

    // const [iterator, setIterator] = useState(0);
    const [parentNode, setParentNode] = useState(null);
    const [node, setNode] = useState(null);
    window.scroll(0, 0);

    let countScroll = 0;
    let iterator = -2;
    const handler = (e) => {
        if (parentNode) {
            const height = parentNode.offsetTop + parentNode.scrollHeight - 500;
            console.log('parent', parentNode, 'scrollY', window.scrollY, 'offset', iterator, 'height', height);
            const childNodes = parentNode?.childNodes;
            const direction = e.wheelDelta < 0 ? 'down' : 'up';



            if (window.scrollY >= 100 &&
                window.scrollY <= parentNode.offsetTop + parentNode.scrollHeight - (parentNode.scrollHeight / 2)) {

                countScroll++;

                if (countScroll >= 4) {
                    countScroll = 0;

                    if (direction === 'down' && iterator <= childNodes.length) {
                        iterator++;
                    } else if (direction === 'up' && iterator > -1) {
                        iterator--;
                    }

                    if (iterator >= childNodes.length - 1 || iterator <= -2) {
                        document.body.style.overflow = 'inherit';

                        // window.removeEventListener('wheel', handler);
                    } else {
                        document.body.style.overflow = 'hidden';
                        childNodes[iterator < 0 ? 0 : iterator].scrollIntoView({ behavior: 'smooth' });
                    }

                    console.log(direction);
                }

            }
        }
    }

    useEffect(() => {
        window.scroll(0, 0);
        window.addEventListener('wheel', handler);
    })



    // const onFocus = () => document.querySelector('body').style.overflow = 'hidden';
    // const onBlur = () => document.querySelector('body').style.overflow = 'inherit';


    return (
        <div className={ styles.wrapper }
            ref={ setParentNode }
        // onMouseOverCapture={onFocus}
        // onMouseOutCapture={onBlur}
        // onPointerEnter={ onFocus }
        // onPointerLeave={ onBlur }

        // onWheelCapture={ handler }
        >
            {
                children.flat().map((child, index) => {

                    return (
                        <div ref={ e => { index === 0 && setNode(e) } } className={ styles.section } key={ index }>
                            { child }
                        </div>
                    )
                })
            }
        </div >
    )
});

export default Slider
