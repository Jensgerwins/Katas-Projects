fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => console.log(response.name))
    .catch(err => console.log(err));
