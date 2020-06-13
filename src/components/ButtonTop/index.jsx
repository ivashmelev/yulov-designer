import React, { memo, useState, useEffect } from 'react';
import styles from './ButtonTop.module.scss';

const ButtonTop = memo(() => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 2100) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    });

    const onTop = () => {
        document.body.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`${styles.wrapper} ${active && styles.active}`} onClick={onTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
              fill="#fff"
            >
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                    <path d="M0,172v-172h172v172z" fill="none" />
                    <g id="original-icon"><path d="M107.5,28.66667v35.83333h-93.16667v43h93.16667v35.83333l57.33333,-57.33333z" /></g>
                </g>
            </svg>
        </div>
    );
});

export default ButtonTop;
