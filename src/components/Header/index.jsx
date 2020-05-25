import React, { memo } from 'react';
import styles from './Header.module.scss';

const Header = memo(() => {

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.title_wrapper }>
                <span className={ styles.title }>
                    aleksey y.
                    </span>
                <span className={ styles.subtitle }>
                    web-designer
                    </span>
            </div>
            <div className={ styles.block }>
                <span className={ styles.label }>
                    portfolio
                    </span>
                <span className={ styles.label }>
                    2020
                    </span>
            </div>
        </div>
    )
});

export default Header;