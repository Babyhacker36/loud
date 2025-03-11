import { useState } from "react";
import axios from "axios";

const useGifData = () => {
  const [topics, setTopics] = useState([
    "Maroon 5",
    "Linkin Park",
    "Jay-z",
    "Coldplay",
    "Biggie",
    "Saquan Barkley",
    "Musiq Soulchild",
    "Drake",
    "Taylor Swift",
    "Wu-tang Clan",
    "Jennifer Lopez",
    "Chris Brown",
  ]);
  const [gifs, setGifs] = useState([]);
  const [starInput, setStarInput] = useState("");

  const displayStarInfo = (star) => {
    const queryURL = `https://api.giphy.com/v1/gifs/search?q=${star}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=20`;

    axios
      .get(queryURL)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => console.error("Error fetching gifs: ", error));
  };

  const addStar = () => {
    if (starInput.trim()) {
      setTopics([...topics, starInput]);
      setStarInput("");
    }
  };

  return { topics, gifs, starInput, setStarInput, displayStarInfo, addStar };
};

export default useGifData;
