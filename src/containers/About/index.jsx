import React, {memo} from 'react';
import styles from './About.module.scss';
import {Link} from "react-router-dom";

const About = memo(() => {

    return (
        <div className={styles.wrapper}>
            <Link className={styles.link_white} to={'#feedback'}>
                связаться со мной >>
            </Link>
            <span className={styles.title}>
                Web-designer
            </span>
            <div className={styles.block_wrapper}>
                <div className={styles.block}>
                    <span className={styles.head}>
                        Я, Алексей Юлов -
                    </span>
                    <span className={styles.text}>
                        начинающий веб-дизайнер из Москвы.
                        Имею опыт работы в IT сфере, более 8 лет.
                        На протяжении всего этого времени занимался самообразованием в digital-дизайне.
                    </span>
                </div>
                <div className={styles.block}>
                    <span className={styles.head}>
                        Социальные сети -
                    </span>
                    <span className={styles.text}>
                        подписывайтесь на мои <br/> соц. сети
                    </span>
                    <div className={styles.link_wrapper}>
                        <Link to={'#'}>Behance</Link>
                        <Link to={'#'}>Instagram</Link>
                        <Link to={'#'}>vk.com</Link>
                    </div>
                    <div className={styles.line} />
                </div>
            </div>
        </div>
    )
});

export default About;