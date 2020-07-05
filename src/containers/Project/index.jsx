import React, { memo } from "react";
import { useParams, Redirect } from 'react-router-dom';
import styles from './Project.module.scss';
import Sidebar from "../../components/Sidebar";
import ButtonTop from "../../components/ButtonTop";

const Project = memo(({ config }) => {

    const { id } = useParams();
    const project = config.filter(el => el.name === id)[0];
    const navigations = config.map(el => el.name);

    if (!project) {
        return <Redirect to="/" />;
    }

    const img = project.img;
    return (
        <>
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
            <ButtonTop />
        </>
    );
});

export default Project;