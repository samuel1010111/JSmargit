// Defining variables to select HTML elements.
const searchInput = document.querySelector('#search-input');
const generationList = document.querySelector('#generation-list');
const pokemonCards = document.querySelector('#pokemon-cards');
// Fetching a list of generations from the PokeAPI.
fetch("https://pokeapi.co/api/v2/generation/")
.then(response => response.json())
.then(data => {
    const generations = data.results;

    // Creating buttons for each generation
    generations.forEach(generation => {
        const button = document.querySelector('.button');
        button.textContent = generation.name;
        button.addEventListener("click", () => loadPokemonByGeneration(generation.name));
        generationList.appendChild(button);
    });
});

// Function to load Pokemon by generation.
function loadPokemonByGeneration(generationName) {
    // Fetching Pokemon data for the selected generation.
fetch(`https://pokeapi.co/api/v2/generation/${generationName}/`)
.then(response => response.json())
.then(data => {
const pokemonList = data.pokemon_species;

// Clearing the existing Pokemon cards.
pokemonCards.innerHTML = "";

// Creating cards for each Pokemon.
pokemonList.forEach(pokemon => {
const pokemonName = pokemon.name;
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
.then(response => response.json())
.then(pokemonData => {
// Creating and populating a card for the Pokemon.
const card = createPokemonCard(pokemonData);
pokemonCards.appendChild(card);
});
});
});

// Function creating a Pokemon card.
function createPokemonCard(pokemon) {
    // Creating and styling the card element.
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    // Populate the card with data (id, name, image, type, height, weight)
    const id = pokemon.id;
    const name = pokemon.name;
    const image = pokemon.sprites.front_default;
    const types = pokemon.types.map(type => type.type.name).join(", ");
    const height = pokemon.height;
    const weight = pokemon.weight;

    // You can use pokemon.id, pokemon.name, pokemon.sprites.front_default, pokemon.types, pokemon.height, pokemon.weight
    card.innerHTML = `
    <h2>${name} (#${id})</h2>
    <img src="${image}" alt="${name}" />
    <p>Type: ${types}</p>
    <p>Height: ${height / 10} m</p>
    <p>Weight: ${weight / 10} kg
`;
    return card;
}

// Adding event listener for the search input
searchInput.addEventListener("input", () => searchPokemonByName(searchInput.value));

// Function to search for a specific Pokemon by name.
function searchPokemonByName(name) {
    if (!generationList.querySelector('.selected')) {
        // If no generation is selected, you can fetch the data from the main API
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                if (response.status === 404) {
                    // Handle the case where the Pokemon is not found
                    pokemonCards.innerHTML = "<p>Pokemon not found.</p>";
                } else {
                    return response.json();
                }
            })
            .then(data => {
                // Clearing the existing Pokemon cards.
                pokemonCards.innerHTML = "";
                // Creating and populating a card for the searched Pokemon.
                const card = createPokemonCard(data);
                pokemonCards.appendChild(card);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    } else {
        // If a generation is selected, call the loadPokemonByGeneration function
        const selectedGeneration = generationList.querySelector('.selected').textContent;
        loadPokemonByGeneration(selectedGeneration);
    }
}
}
