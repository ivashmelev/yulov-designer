/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState, useEffect } from 'react';
import styles from './Navigation.module.scss';

const Navigation = memo(() => {

    const [node, setNode] = useState('about');

    const scroll = (target) => {
        setNode(target);
        document.querySelector(`#${target}`).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.block_wrapper}>
                <div className={styles.block}>
                    <a
                      className={`${styles.link} ${node === 'about' && styles.active}`}
                      onClick={() => scroll('about')}
                    >
                        обо мне
                    </a>
                    <a
                      className={`${styles.link} ${node === 'portfolio' && styles.active}`}
                      onClick={() => scroll('portfolio')}
                    >
                        портфолио
                    </a>
                    <a
                      className={`${styles.link} ${node === 'contacts' && styles.active}`}
                      onClick={() => scroll('contacts')}
                    >
                        контакты
                    </a>
                </div>

            </div>
        </div>
    );
});

export default Navigation;