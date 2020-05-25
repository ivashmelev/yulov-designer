import React, { memo, useEffect, useState } from "react";
import styles from './Project.module.scss';
import { useParams, Redirect } from 'react-router-dom';
import Sidebar from "../../components/Sidebar";

const Project = memo(({ config }) => {

    const { id } = useParams();
    const project = config.filter(el => el.name === id)[0];
    const navigations = config.map(el => el.name);

    if (!project) {
        return <Redirect to={'/'} />
    }

    const img = project.img;

    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <img src={img} />
            </div>
            <div className={styles.block}>
                <Sidebar
                    id={id}
                    length={config.length}
                    navigations={navigations}
                    {...project}
                />
            </div>
        </div>
    )
});

export default Project;