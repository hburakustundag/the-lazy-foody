let checkedIngredients = [];
let checkboxData;
const button = document.getElementById('post-btn');
button.addEventListener('click', async _ => {
  checkedIngredients = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
  .map(item => item.value)
  checkboxData = {ingredient_names: checkedIngredients}
  axios.post('http://localhost:3000/dishes/suggest', checkboxData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
});



