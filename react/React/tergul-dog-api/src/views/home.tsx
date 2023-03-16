import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DogCard from '../components/DogCard';
import { DogContext } from '../contexts/DogContexts';
import './stylesheets/homeStyleSheet.css';
import { render } from '@testing-library/react';

function HOME() {

  interface breedImgType {
    breed: string,
    src: any
  }

  const [breedsArray, setBreedsArray] = useState<string[]>([""]);
  const [renderedBreedsArray, setRenderedBreedsArray] = useState<string[]>([""]);
  const [breedsImgArray, setBreedsImgsArray] = useState<breedImgType[]>([{ breed: "", src: "" }]);

  async function handleGetBreeds() {
    try {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      const breeds: string[] = Object.keys(data.message)
      setBreedsArray(breeds);
    } catch (error) {
      console.error(error)
    }
  }

  async function handleGetBreedsImgs() {
    try {
      let breedsImgs: breedImgType[] = [{ breed: "", src: "" }];
      if (breedsArray) {
        breedsArray.map(async (breed: any, index) => {
          const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/1`);
          breedsImgs[index] = { breed: breed, src: data.message };
          // console.log(breedsImgs[index].src)
        })
        setBreedsImgsArray(breedsImgs);
      }
    } catch (error) {
      console.error(error)
    }
  }

  function handleSearchBreed(event: any) {
    event.preventDefault();
    const pattern = new RegExp(`^${event.target.value}`);
    const newArr = breedsArray.filter((breed: any) => {
      return (breed.match(pattern));
    });
    setRenderedBreedsArray(newArr);
  }

  useEffect(() => {
    handleGetBreeds();
  }, [breedsArray, renderedBreedsArray]);

  if (renderedBreedsArray[0] == "") {
    return (
      <>
        <div>
          <h2> welcome to home ^_^  </h2><br />
          <input type="text" id='search' onChange={handleSearchBreed} />
        </div><br />
        <button onClick={handleGetBreedsImgs}> get dogs imgs </button>
        {
          breedsArray.map((dog: any, index) => {
            return (<DogCard title={dog} src={breedsImgArray[index] ? breedsImgArray[index].src[0] : null} key={index} />)
          })
        };
      </>
    );
  }
  else{
    return (
      <>
        <div>
          <h2> welcome to home ^_^  </h2><br />
          <input type="text" id='search' onChange={handleSearchBreed} />
        </div><br />
        <button onClick={handleGetBreedsImgs}> get dogs imgs </button>
        {
          renderedBreedsArray.map((dog: any, index) => {
            return (<DogCard title={dog} src={""} key={index} />)
          })
        };
      </>
    );
  }
}
export default HOME;