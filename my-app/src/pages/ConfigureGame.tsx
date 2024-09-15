import { Dropdown } from "@/components/ui/dropdown";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export function ConfigureGame() {
  const [imageCount, setImageCount] = useState("3");
  const [category, setCategory] = useState("(Easy) People");

  const navigate = useNavigate();

  const onImageCountChange = (event) => {
    setImageCount(event.target.value);
  };

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onSubmit = (event) => {
    // go to the image play page and pass these two as props
    console.log(imageCount);
    console.log(category);
    navigate("/selectimages", {
      state: { imageCount: imageCount, category: category },
    });
  };
  return (
    <>
      <div>
        <h1> Please configure your game parameters.</h1>
      </div>
      <Form.Group className="mb-3">
        <Form.Label>How many images would you like to test?</Form.Label>
        <Form.Select
          value={imageCount}
          onChange={onImageCountChange}
          style={{ width: "70px" }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select a Category</Form.Label>
        <Form.Select
          value={category}
          onChange={onCategoryChange}
          style={{ width: "175px" }}
        >
          <option>(Easy) People</option>
          <option>(Medium) Food</option>
          <option>(Hard) Nature</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </>
  );
}

// <>
//   <div>
//     <h1>Please select a category</h1>
//     <Dropdown
//       options={["People", "Nature", "Food"]}
//       onSelect={handleSelect}
//     />{" "}
//   </div>
//   <div>
//     <h1>Please select the number of rounds</h1>
//     <Dropdown
//     options = {[1, 2, 3, 4, 5]}
//     onSelect = {handleSelect}
//     />
//   </div>
// </>
