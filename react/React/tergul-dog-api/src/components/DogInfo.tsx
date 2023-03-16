import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

const DogInfo = () => {
    const [imgSrc, setImgSrc] = useState<string>("");

    async function handleGetImgByBreed(breed: any) {
        try {
            const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/1`);
            return (data.message);
        }
        catch (error) {
            console.error(error)
        }
    }


    let { name } = useParams();
    const url = `https://en.wikipedia.org/wiki/${name}`;

    useEffect(() => {
        handleGetImgByBreed(name).then((dog) => {
            setImgSrc(dog)
        });
    }, []);

    return (
        <>
            <div>DogInfo</div><br />
            <img src={imgSrc} alt={name} /><br />
            <a href={url}> search on wikipedia </a>
        </>
    )
}

export default DogInfo



