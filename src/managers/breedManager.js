const breeds = [{breed: 'random'}, {breed: 'random2'}];

exports.addBreed = (breed) => {
    breeds.push({breed});
}

exports.getBreeds = () => {
    return breeds.slice();
}