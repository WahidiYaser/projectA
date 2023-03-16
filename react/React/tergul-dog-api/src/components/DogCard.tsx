import React, { FC, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DogContext } from '../contexts/DogContexts';

function DogCard(props: any) {
    // const { breedsImgArray, setBreedsImgsArray } = useContext(DogContext);
    return (
        <div>
            <h3> {props.title} </h3>
            <Link to={`/dog/${props.title}`}> <img src={props.src} alt={props.title} /> </Link>
        </div>
    );
}

export default DogCard;