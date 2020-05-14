import React, {memo} from 'react';
import styles from './Navigation.module.scss';
import {Link, useLocation} from "react-router-dom";

const Navigation = memo(() => {

    const location = useLocation();

   return (
       <div className={styles.wrapper}>
           <div className={styles.block_wrapper}>
               <div className={styles.block}>
                       <Link className={`${styles.link} ${location.hash === '#about' && styles.active}`} to={'#about'}>
                           обо мне
                       </Link>
                       <Link className={`${styles.link} ${location.hash === '#portfolio' && styles.active}`} to={'#portfolio'}>
                           портфолио
                       </Link>
                       <Link className={`${styles.link} ${location.hash === '#contacts' && styles.active}`} to={'#contacts'}>
                           контакты
                       </Link>
               </div>
               <div className={styles.block}>
                   <span className={styles.label}>
                       portfolio
                   </span>
                   <span className={styles.label}>
                       2020
                   </span>
               </div>
           </div>
       </div>
   )
});

export default Navigation;