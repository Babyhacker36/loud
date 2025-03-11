// src/App.js
import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../src/Components/Navigation/NavBar.jsx";
import ButtonsRow from "../src/Components/ButtonRow/ButtonsRow.jsx";
import GifList from "../src/Components/GiftList/GiftList.jsx";
import useGifData from "./Hooks/useGifData";

function App() {
  const { topics, gifs, starInput, setStarInput, displayStarInfo, addStar } =
    useGifData();

  return (
    <>
      <Container fluid className="app">
        <Navbar
          starInput={starInput}
          setStarInput={setStarInput}
          addStar={addStar}
        />
        <ButtonsRow topics={topics} displayStarInfo={displayStarInfo} />
        <GifList gifs={gifs} />
      </Container>
    </>
  );
}

export default App;
