import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DogCard from '../components/DogCard';
import { DogContext } from '../contexts/DogContexts';
import './stylesheets/homeStyleSheet.css';

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
        })
        setBreedsImgsArray(breedsImgs);
      }
    } catch (error) {
      console.error(error)
    }
  }

  // async function handleGetBreedImg(breed: any) {
  //   try {
  //     const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/1`);
  //     return(data.message);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  function handleSearchBreed(event: any) {
    let search = event.target.value;
    event.preventDefault();
    if (!search) {
      setRenderedBreedsArray([""]);
    }
    else {
      const pattern = new RegExp(`^${search}`);
      const newArr = breedsArray.filter((breed: any) => {
        return (breed.match(pattern));
      });
      setRenderedBreedsArray(newArr);
    }
  }

  useEffect(() => {
    handleGetBreeds();
  }, [breedsArray, breedsImgArray, renderedBreedsArray]);

  if (renderedBreedsArray[0] == "") {
    return (
      <div className='HOME'>
        <div>
          <h2> welcome to home ^_^  </h2><br />
          <input type="text" id='search' onChange={handleSearchBreed} />
        </div><br />
        <button onClick={handleGetBreedsImgs}> get dogs imgs </button>
        <div className='DogContainer'>
          {
            breedsArray.map((dog: any, index) => {
              return (
                <div className='DogCard' key={index}>
                  <DogCard title={dog} src={breedsImgArray[index] ? breedsImgArray[index].src[0] : null} />
                </div>
              )
            })
          };
        </div>
      </div>
    );
  }
  else {
    return (
      <>
        <div>
          <h2> welcome to home ^_^  </h2><br />
          <input type="text" id='search' onChange={handleSearchBreed} />
        </div><br />
        {/* <button onClick={handleGetBreedsImgs}> get dogs imgs </button> */}
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