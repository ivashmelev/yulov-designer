import React, {memo} from 'react';
import styles from './Header.module.scss';

const Header = memo(() => {

     return (
         <div className={styles.wrapper}>
             <div className={styles.title_wrapper}>
                <span className={styles.title}>
                    aleksey y.
                </span>
                 <span className={styles.subtitle}>
                    web-designer
                </span>
             </div>
         </div>
     )
 });

export default Header;