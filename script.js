const template = (data) => {
    const main = document.querySelector('main');
    const container = document.querySelector('.container');
    const {sprites: sprites, name: name, types: types, moves: moves, abilities: abilities} = data;

    let html = `
    <section class="hero">
    <div class="front">
        <img src="${sprites.other.dream_world.front_default}" alt="No Available Photos">
    </div>
    </section>

    <section class="details">
        <div class="name">
            <h1> ${name} </h1>
            <h3> ${types[0].type.name} type </h3>
        </div>


        <div class="moves">
            <h1> Moves </h1>
            <ul>
                <li> ${moves[0].move.name} </li>
                <li> ${moves[1].move.name} </li>
                <li> ${moves[2].move.name} </li>
            </ul>
        </div>

        <div class="abilities">
            <h1> Abilities </h1>
            <ul>
                <li> ${abilities[0].ability.name} </li>
                <li> ${abilities[1].ability.name} </li>
            </ul>
        </div>
    
    </section>
    `;

    container.innerHTML = html;

}


const generatePokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
        if(!response.ok) {
            throw new Error('PokeApi data not found');
        }
        return response.json();
    })
    .then((data) => {
        template(data);
        console.log(data.abilities[0].ability.name)
        
    })
    .catch(error => {
        console.log(error.message)
    })
}




const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let input = form.input.value.toLowerCase();

    if(input) {
        generatePokemon(input);
    }

    form.reset();

})
