import React, {memo, useState} from 'react';
import styles from './Element.module.scss';
import {Link} from "react-router-dom";
import './animation_img.scss'

const Element = memo(({title, subtitle, index, img, description, right, link}) => {

    const [fragments] = useState(new Array(100).fill(null));
    const [isHoveredImg, setIsHoveredImg] = useState(false);
    const [isHoveredLink, setIsHoveredLink] = useState(false);

    const hoverImg = () => setIsHoveredImg(true);
    const unhoverImg = () => setIsHoveredImg(false);

    const hoverLink = () => setIsHoveredLink(true);
    const unhoverLink = () => setIsHoveredLink(false);

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.header} ${right && styles.right}`}>
                <span className={styles.title}>
                    {title}&nbsp;
                </span>
                <span className={styles.subtitle}>
                     - {subtitle}
                </span>
            </div>
            <div className={styles.content_wrapper}>
                <div className={`${styles.content} ${right && styles.right}`}>
                    <div className={`${styles.number} ${right && styles.right}`}>0{index+1}</div>
                    <div className={`reflection-container ${isHoveredLink && 'active'}`} onMouseEnter={hoverImg} onMouseLeave={unhoverImg}>
                        {fragments.map((fragment, index) => {
                               return <div key={index} className={`reflection-grid-cell reflection-grid-cell-${index}`} />
                            }
                        )}
                        <div className='reflection-content' style={{backgroundImage: `url(${img})`}}/>
                    </div>
                    <div className={styles.parent_description_wrapper}>
                        <div className={`${styles.description_wrapper} ${right && styles.right}`}>
                            <span className={styles.description}>
                                {description}
                            </span>
                            <div className={styles.link_wrapper}>
                                <Link className={`${styles.link} ${isHoveredImg && styles.active}`} to={link}
                                    onMouseEnter={hoverLink} onMouseLeave={unhoverLink}
                                >
                                    Посмотреть проект >>
                                </Link>
                            </div>
                            <div className={styles.soc_wrapper}>
                                <span className={styles.head}>
                                    Социальные сети —
                                </span>
                                <span className={styles.text}>
                                    подписывайтесь на мои соц. сети
                                </span>
                                <div className={styles.block_link}>
                                    <Link to={'#'}>
                                        Behance
                                    </Link>
                                    <Link to={'#'}>
                                        Instagram
                                    </Link>
                                </div>
                                <div className={styles.line} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Element;