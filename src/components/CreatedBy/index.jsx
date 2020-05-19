import React, { memo } from 'react';
import { Link } from "react-router-dom";
import styles from './CreatedBy.module.scss';

const CreatedBy = memo(() => {

    return (
        <div className={styles.wrapper}>
            <span className={styles.text}>Made by&nbsp;</span>
            <Link className={styles.link} to={''}>Aleksey Y.</Link>
            <span className={styles.text}>&nbsp;&&nbsp;</span>
            <a className={styles.link} href={'tg://resolve?domain=ishmelev'}>FoxStudio</a>
        </div>
    )
});

export default CreatedBy;