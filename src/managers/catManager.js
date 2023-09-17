const uniqid = require("uniqid");

const shelteredCats = [];

const cats = [
  {
    id: uniqid(),
    name: "Kondio",
    breed: "random",
    description: "nqkva kotka",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
  },
  {
    id: uniqid(),
    name: "Osman",
    breed: "random2",
    description: "oshte po-nqkva kotka",
    image:
      "https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg",
  },
];

exports.getCats = (search) => {
  let result = cats.slice();

  if (search){
    result = result.filter(cat => cat.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

  return result;
}


exports.addCat = (name, description, image, breed) => {
  cats.push({id: uniqid(), name, breed, description, image})
}

exports.findCat = (catId) => {
  return cats.find(cat => cat.id == catId)
}

exports.removeCat = (id) => {
  const cat = cats.find(cat => cat.id == id);
  const indexOfCat = cats.indexOf(cat);
  cats.splice(indexOfCat,1)
}

exports.shelterCat = (id) => {
  const cat = cats.find(cat => cat.id == id);
  shelteredCats.push({cat});
}
