import { useState, useEffect } from "react";
import axios from 'axios';

const useJoke = (name) => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const getJoke = async () => {
        const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
        setJoke(data);
    }

    getJoke();
  }, [name])

  return joke;
}

export default useJoke;