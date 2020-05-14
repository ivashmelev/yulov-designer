import React, {memo} from "react";
import styles from './Background.module.scss';
import Video from '../../static/bg_w.mp4';

const Background = memo(() => {

    return (
        <div className={styles.Bg_wrapper}>
                <video
                    width={1300}
                    loop
                    autoPlay
                >
                    <source src={Video} type='video/mp4' />
                </video>
        </div>
    )

 });

export default Background;