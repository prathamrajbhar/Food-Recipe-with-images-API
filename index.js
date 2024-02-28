const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://food-recipes-with-images.p.rapidapi.com/',
  params: {q: 'Samosa'},
  headers: {
    'X-RapidAPI-Key': '89a70ee230msh5cd3e527f447396p19d58cjsnab0cbda29d4e',
    'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
  }
};


async function getRecipes() {
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

getRecipes();