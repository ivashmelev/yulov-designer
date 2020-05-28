import React, { memo, useState } from 'react';
import styles from './Element.module.scss';
import { Link } from "react-router-dom";
import './animation_img.scss'
import Networks from "../Networks";
import networksConfig from "../../configs/networks-config";

const Element = memo(({ title, subtitle, index, img, description, right, link }) => {

    const [fragments] = useState(new Array(100).fill(null));

    return (
        <div className={ styles.wrapper } id={ index === 0 && 'portfolio' }>
            <div className={ `${styles.content_wrapper} ${right && styles.right}` }>
                <div className={ `${styles.content} ${right && styles.right}` }>
                    <div className={ `${styles.number} ${right && styles.right}` }>0{ index + 1 }</div>
                    <Link className={ `reflection-container ${styles.link_img}` }
                        to={ link }
                    >
                        { fragments.map((fragment, index) => {
                            return <div key={ index } className={ `reflection-grid-cell reflection-grid-cell-${index}` } />
                        }
                        ) }
                        <div className={ `reflection-content` } style={ { backgroundImage: `url(${img})` } } />
                    </Link>
                    <div className={ `${styles.parent_description_wrapper} ${right && styles.right}` } >
                        <div className={ `${styles.header} ${right && styles.right}` }>
                            <span className={ styles.title }>
                                { title }&nbsp;
                            </span>
                            <span className={ styles.subtitle }>
                                — { subtitle }
                            </span>
                        </div>
                        <div className={ `${styles.description_wrapper} ${right && styles.right}` }>
                            <span className={ `${styles.description} ${right && styles.right}` }>
                                { description }
                            </span>
                            <div className={ `${styles.link_wrapper} ${right && styles.right}` }>
                                <Link className={ `${styles.link} ${right && styles.right}` } to={ link }>
                                    Посмотреть проект >>
                                </Link>
                            </div>
                            <div className={ styles.soc_wrapper }>
                                <Networks config={ networksConfig } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Element;