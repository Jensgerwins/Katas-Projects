let f;
arr = [];

async function Application() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1281");
    const result = await response.json();
    const array = result.results;
    array.forEach(item => {
        f = item.name;
        if (f === "pikachu") {
            arr.push(f);
            console.log(f);
            console.log(arr);
        }

    });

    console.log(array);

}

Application();