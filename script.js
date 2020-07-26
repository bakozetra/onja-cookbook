// Grab the selector
const typeIngredient = document.querySelector('.ingredients');
const ingredientBtn = document.querySelector('.ingredient-button');
const ingredient = document.querySelector('#ingredient');
const steps = document.querySelector('.steps');
const stepBtn = document.querySelector('.step-button');
const step = document.querySelector('#step');
const submit = document.querySelector('.submit-button');

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


// const recipes = [
// 	{
// 		title: 'Eggs',
// 		picture: 'https://bit.ly/2ZXyiKI',
// 		author: 'Loïc',
// 		iculty: 'easy',
// 		timing:diff '15',
// 		ingredients: ['eggs', 'salt', 'water'],
// 		steps: [
// 			'Put a pan on the fire',
// 			'Crack the eggs on it',
// 			'Wait, put them out',
// 			'Add some salt on it',
// 		],
// 	},
// ];

const recepiName = document.querySelector('#recepi-name');

const handleSubmitButton = (event) => {
    var recipe = ` [{
                title: ${recepiName.value},
                picture: '',
                author: '',
                iculty: '',
                timing: "",
                ingredients: [''],
                steps: [""],
            }, ];
      
            `;


    function myFunction() {
        var newArray = document.getElementsByName("name").value;
        recipe.push(newArray);
        document.getElementsByName("name").value = "";
        document.getElementById("demo").innerHTML = recipe;
    }
}