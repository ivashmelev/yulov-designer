import React, {memo} from "react";
import {useParams} from 'react-router-dom';

const Project = memo(() => {
    const {id} = useParams();

    return (
        <div>{id}</div>
    );
});

export default Project;