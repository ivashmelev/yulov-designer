import React, {memo, useEffect} from "react";
import styles from './Sidebar.module.scss';
import {Link} from "react-router-dom";
import arrowBack from '../../static/img/Arrow_back.svg';
import slash from '../../static/img/slash.svg';
import arrowForward from '../../static/img/Arrow_forward.svg';

const Sidebar = memo(({id, length, description, fonts, colors, links}) => {
    console.log(fonts)
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Link to={'/'}>
                    На главную
                </Link>
                <div className={styles.nav}>
                    <Link to={id === 1 ? '/' : `/project/${id-1}`}>
                        <img src={arrowBack}/>
                    </Link>
                    <img src={slash}/>
                    <Link to={id === length ? `/project/1` : `/project/${id+1}`}>
                        <img src={arrowForward}/>
                    </Link>
                </div>
            </div>
            <div className={styles.block} style={{marginTop: '60px'}}>
                <span className={styles.title}>
                    Описание
                </span>
                <span className={styles.text}>
                    {description}
                </span>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>
                    Шрифт
                </span>
                {fonts.map(({title}, index) => <span key={index} className={styles.text_fonts}>{title}</span> )}
            </div>
            <div className={styles.block}>
                <span className={styles.title}>
                    Цвета
                </span>
                <div className={styles.circle_wrapper}>
                    {colors.map((color, index) => <div className={styles.circle} key={index} style={{backgroundColor: color}}/>)}
                </div>
            </div>
            <div className={styles.block}>
                <span className={styles.title}>
                    Доп. материалы
                </span>
                <div className={styles.links_wrapper}>
                    {links.map(({title, url}, index) => <Link to={url} key={index}>{title}</Link>)}
                </div>
                <div className={styles.line}/>
            </div>
        </div>
    )
});

export default Sidebar;