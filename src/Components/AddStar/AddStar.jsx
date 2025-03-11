// src/Components/AddStar/AddStar.jsx
const AddStar = ({ starInput, setStarInput, addStar }) => {
  // Handle 'Enter' key press to trigger addStar function
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addStar();
    }
  };

  return (
    <div className="add-star">
      <input
        type="text"
        value={starInput}
        onChange={(e) => setStarInput(e.target.value)}
        onKeyDown={handleKeyPress} // Listen for key press
        placeholder="Add a New GIf"
      />
      <button onClick={addStar}>Add Gif</button>
    </div>
  );
};

export default AddStar;



// to use component
// import AddStar from "../src/Components/AddStar/AddStar.jsx"; 
//  <AddStar starInput={starInput} setStarInput={setStarInput} addStar={addStar} />
