import React, { memo } from 'react';
import styles from './Contacts.module.scss';
import Networks from "../../components/Networks";
import networksConfig from "../../configs/networks-config";


const Contacts = memo(({ phone, mail }) => {
    return (
        <div className={styles.wrapper} id="contacts">
            <span className={styles.title}>
                Con-tacts
            </span>
            <div className={styles.contacts_wrapper}>
                <div className={styles.link_wrapper}>
                    <span className={styles.small}>
                        Телефон
                    </span>
                    <a href={`tel:${phone}`}>
                        { phone }
                    </a>
                </div>
                <div className={styles.link_wrapper}>
                    <span className={styles.small}>
                        Почта
                    </span>
                    <a href={`mailto:${mail}`}>
                        { mail }
                    </a>
                    <div className={styles.network_wrapper}>
                        <Networks hide config={networksConfig} />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contacts;