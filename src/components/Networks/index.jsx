import { Link } from "react-router-dom";
import React, { memo } from "react";
import styles from "./Networks.module.scss";

const Networks = memo(({ config, hide }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.head}>
                Социальные сети -
            </span>
            <span className={styles.text}>
                подписывайтесь на мои
                <br />
                соц. сети
            </span>
            <div className={styles.link_wrapper}>
                {/* eslint-disable-next-line react/no-array-index-key */}
                { config.map(({ title, url }, index) => <Link key={index} to={url}>{ title }</Link>) }
            </div>
            <div className={styles.line_wrapper}>
                <div className={`${styles.line} ${hide && styles.hide}`} />
            </div>
        </div>
    );
});

export default Networks;