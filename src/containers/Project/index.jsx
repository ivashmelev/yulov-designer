import React, {memo, useEffect, useState} from "react";
import styles from './Project.module.scss';
import {useParams, Redirect} from 'react-router-dom';
import Sidebar from "../../components/Sidebar";

const Project = memo(({config}) => {

    const [img, setImg] = useState();
    const [isHave, setIsHave] = useState(true);

    const {id} = useParams();
    const project = config[id-1];



    useEffect(() => {
        if(project){
            setIsHave(true);
            setImg(project.img)
        }

        console.log(isHave)
    });

    return (
        !isHave ?
            <Redirect to={'/'} />
            :
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <img src={img}/>
                </div>
                <div className={styles.block}>
                    <Sidebar
                        id={Number(id)}
                        length={config.length}
                        {...project}
                    />
                </div>
            </div>
    )
});

export default Project;