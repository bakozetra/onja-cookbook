// Grab the selector
const ingredientParagraph = document.querySelector('.ingredient-description');
const ingredientBtn = document.querySelector('.ingredient-button');
const ingredient = document.querySelector('#ingredient');
// create function of the ingredient 
const myIngredient = () => {
    const myHtml = `
     <input type="text" name="ingredient" id="ingredient" required>
     `
    ingredientParagraph.insertAdjacentHTML('beforeend', myHtml);
}


// add event listener on the ingredient button
ingredientBtn.addEventListener('click', myIngredient);