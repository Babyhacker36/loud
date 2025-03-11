import React, { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";

const GifList = ({ gifs }) => {
  const [clickedGif, setClickedGif] = useState({});
  const [visibleCount, setVisibleCount] = useState(12); // Start by showing 12 GIFs (2 rows)

  // Toggle GIF animation per image
  const handleImageClick = (index, gif) => {
    setClickedGif((prevState) => ({
      ...prevState,
      [index]: prevState[index] === "animate" ? "still" : "animate",
    }));
  };

  // Show more GIFs when the user clicks the button
  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 12); // Add 12 more GIFs to the visible count
  };

  return (
    <Container fluid>
      <Row className="g-4"> {/* Adds spacing between rows */}
        {gifs.slice(0, visibleCount).map((result, index) => (
          <Col key={index} xs={6} sm={6} md={4} xl={3} xxl={2} className="d-flex">
            <div className="gif-card">
              <div className="gif-image" onClick={() => handleImageClick(index, result)}>
                <img
                  src={
                    clickedGif[index] === "animate"
                      ? result.images.fixed_height.url
                      : result.images.fixed_height_still.url
                  }
                  alt={result.title}
                  className="fixed-gif"
                />
              </div>
              <div className="gif-content">
                <p className="gif-title"><strong>Title:</strong> {result.title}</p>
                <p className="gif-rating"><strong>Rating:</strong> {result.rating}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {/* Button to load more GIFs */}
      {visibleCount < gifs.length && (
        <div className="d-flex justify-content-center mt-3">
          <button onClick={handleLoadMore}>See More</button>
        </div>
      )}
    </Container>
  );
};

export default GifList;
