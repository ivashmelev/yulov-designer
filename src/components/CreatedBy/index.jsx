import React, {memo} from 'react';
import {Link} from "react-router-dom";
import styles from './CreatedBy.module.scss';

const CreatedBy = memo(() => {

    return (
        <div className={styles.wrapper}>
            <span>Made by&nbsp;</span>
            <Link to={''}>Aleksey Y.</Link>
            <span>&nbsp;&&nbsp;</span>
            <a href={'tg://resolve?domain=ishmelev'}>FoxStudio</a>
        </div>
    )
});

export default CreatedBy;