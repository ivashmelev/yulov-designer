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
        <div className={`${styles.wrapper} ${active && styles.active}`} onClick={onTop} />
    );
});

export default ButtonTop;
