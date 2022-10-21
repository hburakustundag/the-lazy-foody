import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const ListIngredients = () => {
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState([]);

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
    await axios
      .post("http://localhost:3000/dishes/suggest", checkboxData)
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
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

  return (
    <Fragment>
      {" "}
      <table className="table table-responsive table-borderless mt-5">
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
      <button className="btn" onClick={() => postIngredients()}>
        Suggest
      </button>
    </Fragment>
  );
};

export default ListIngredients;
