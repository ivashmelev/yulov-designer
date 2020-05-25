import React, { memo } from 'react';
import styles from './Navigation.module.scss';

const Navigation = memo(({ fullpageApi, pageCount, currentPage }) => {


    const changeAnchor = (slide) => () => {
        fullpageApi.moveTo(slide, 0);
    }

    // useEffect(() => {
    //     console.log(window.location.hash)
    //     if(window.location.hash === '' && currentPage === 0){
    //         window.location.hash = '#about';
    //     } else if(currentPage > 0 && currentPage <= pageCount-2 ){
    //         window.location.hash = '#portfolio';
    //     } else if(currentPage === pageCount-1){
    //         window.location.hash = '#contacts';
    //     }
    // }, [currentPage])

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.block_wrapper }>
                <div className={ styles.block }>
                    <a className={ `${styles.link} ${currentPage >= 0 && currentPage < 2 && styles.active}` }
                        // to={'#about'}
                        onClick={ changeAnchor(1) }
                    >
                        обо мне
                    </a>
                    <a className={ `${styles.link} ${currentPage >= 2 && currentPage <= pageCount - 2 && styles.active}` }
                        // to={'#portfolio'}
                        onClick={ changeAnchor(3) }
                    >
                        портфолио
                    </a>
                    <a className={ `${styles.link} ${currentPage === pageCount - 1 && styles.active}` }
                        // to={'#contacts'}
                        onClick={ changeAnchor(pageCount) }
                    >
                        контакты
                    </a>
                </div>
                <div className={ styles.block }>
                    <span className={ styles.label }>
                        portfolio
                    </span>
                    <span className={ styles.label }>
                        2020
                    </span>
                </div>
            </div>
        </div>
    )
});

export default Navigation;