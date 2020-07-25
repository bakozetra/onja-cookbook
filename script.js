// Grab the selector
const typeIngredient = document.querySelector('.ingredients');
const ingredientBtn = document.querySelector('.ingredient-button');
const ingredient = document.querySelector('#ingredient');
const steps = document.querySelector('.steps');
const stepBtn = document.querySelector('.step-button');
const step = document.querySelector('#step');
// create function for ingredient 
const myIngredient = () => {
    const myHtmlIngredient = `
     <input type="text" name="ingredient" id="ingredient" required>
     `
    typeIngredient.insertAdjacentHTML('beforeend', myHtmlIngredient);
};


// function for step
const myStep = () => {
    const myHtml = `
    <input type="text" name="step" id="step" required>
    `
    steps.insertAdjacentHTML('beforeend', myHtml);
};
// add event listener
ingredientBtn.addEventListener('click', myIngredient);
stepBtn.addEventListener('click', myStep);