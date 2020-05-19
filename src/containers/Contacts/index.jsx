import React, { memo } from 'react';
import styles from './Contacts.module.scss';
import Networks from "../../components/Networks";
import networksConfig from "../../configs/networks-config";
import CreatedBy from "../../components/CreatedBy";

const Contacts = memo(({ phone, mail }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>
                Con-tacts
            </span>
            <div className={styles.contacts_wrapper}>
                <div className={styles.link_wrapper}>
                    <span className={styles.small}>
                        Телефон
                    </span>
                    <a href={`tel:${phone}`}>
                        {phone}
                    </a>
                </div>
                <div className={styles.link_wrapper}>
                    <span className={styles.small}>
                        Почта
                    </span>
                    <a href={`mailto:${mail}`}>
                        {mail}
                    </a>
                    <div className={styles.network_wrapper}>
                        <Networks config={networksConfig} />
                    </div>
                    <div>
                        <CreatedBy />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Contacts;