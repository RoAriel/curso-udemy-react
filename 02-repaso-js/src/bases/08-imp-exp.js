import heroes, { owners } from '../data/heroes'

console.log('Owners: ', owners);


const getHeroeById = (id) => {
    return heroes.find(h => h.id == id)
};

console.table(getHeroeById(1));

const getHeroesByOwner = (owner) =>heroes.filter(h => h.owner == owner)

console.log(getHeroesByOwner('Marvel'));
console.log(getHeroesByOwner('DC'));
