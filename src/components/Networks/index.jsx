import styles from "./Networks.module.scss";
import {Link} from "react-router-dom";
import React, {memo} from "react";

const Networks = memo(({config}) => {
    return (
        <div className={styles.wrapper}>
                    <span className={styles.head}>
                        Социальные сети -
                    </span>
            <span className={styles.text}>
                        подписывайтесь на мои <br/> соц. сети
                    </span>
            <div className={styles.link_wrapper}>
                {config.map(({title, url}, index) => <Link key={index} to={url}>{title}</Link>)}
            </div>
            <div className={styles.line} />
        </div>
    );
});

export default Networks;