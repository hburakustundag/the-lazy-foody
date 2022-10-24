import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const ListIngredients = () => {
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const getIngredients = async () => {
    try {
      const response = await axios
        .get("http://localhost:3000/ingredients")
        .then((response) => response.data);
      setData(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const postIngredients = async () => {
    const checkboxData = { ingredient_names: ingredients };
    try {
      if (ingredients.length) {
        const response = await axios
          .post("http://localhost:3000/dishes/suggest", checkboxData)
          .then((response) => response.data);
        setSuggestions(response);
        
      } else {
        alert("You did not choose any ingredient!");
      }
    } catch (error) {
      console.error(error.message);
    }
    setOpenModal(true);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const handleChange = (name) => {
    const ingredientsArray = [...ingredients];
    const index = ingredientsArray.indexOf(name);
    if (index === -1) {
      ingredientsArray.push(name);
    } else {
      ingredientsArray.splice(index, 1);
    }
    setIngredients(ingredientsArray);
  };
  
  const Modal = ({open, onClose}) => {
    if(!open) return null;
    return (
        <div className='modalContainer'>
            <div className='modalRight'>
                <p className='closeBtn' onClick={onClose}>X</p>
                <div className='content'>
                  <p><b>Suggested meals are listed below:</b></p>
                  {suggestions.map((item, index) => (
                      <p key={index}> {item.dish_name[0].toUpperCase() + item.dish_name.slice(1)}</p>
                  ))}
                </div>
            </div>
        </div>
    )
}

  return (
    <Fragment>
      {" "}
      <div className="container mt-5 w-25">
        <table className="table table-responsive table-borderless">
          <thead>
            <tr className="bg-light">
              <th scope="col" width="5%"></th>
              <th scope="col" width="20%">
                Ingredient
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">
                  <input
                    className="form-check-input form_checkbox"
                    type="checkbox"
                    value={data.ingredient_name}
                    onClick={() => handleChange(item.ingredient_name)}
                  />
                </th>
                <td>{item.ingredient_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-primary mt-1 ml-auto"
          onClick={() => postIngredients()}
        >
          Suggest
        </button>
      </div>
      {<Modal open={openModal} onClose={() => setOpenModal(false)} />}
    </Fragment>
  );
};

export default ListIngredients;

