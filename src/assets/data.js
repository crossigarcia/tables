const data = [
  {
    name: "Harry Potter",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: {
      wood: "holly",
      core: "phoenix feather",
      length: 11,
    },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    id: 1
  },
  {
    name: "Hermione Granger",
    alternate_names: [],
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    wizard: true,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: {
      wood: "vine",
      core: "dragon heartstring",
      length: "",
    },
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    id: 2
  },
  {
    name: "Ron Weasley",
    alternate_names: ["Dragomir Despard"],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: {
      wood: "willow",
      core: "unicorn tail-hair",
      length: 14,
    },
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    id: 3
  },
  {
    name: "Draco Malfoy",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: {
      wood: "hawthorn",
      core: "unicorn tail-hair",
      length: 10,
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    id: 4
  },
  {
    name: "Minerva McGonagall",
    alternate_names: [],
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "04-10-1925",
    yearOfBirth: 1925,
    wizard: true,
    ancestry: "",
    eyeColour: "",
    hairColour: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "tabby cat",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Dame Maggie Smith",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/mcgonagall.jpg",
    id: 5
  },
  {
    name: "Severus Snape",
    alternate_names: ["Half-Blood Prince"],
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alternate_actors: [],
    alive: false,
    image: "http://hp-api.herokuapp.com/images/snape.jpg",
    id: 6
  },
  {
    name: "Neville Longbottom",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "30-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "",
    hairColour: "blonde",
    wand: {
      wood: "cherry",
      core: "unicorn tail-hair",
      length: 13,
    },
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Matthew Lewis",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/neville.jpg",
    id: 7
  },
  {
    name: "Luna Lovegood",
    alternate_names: [],
    species: "human",
    gender: "female",
    house: "Ravenclaw",
    dateOfBirth: "13-02-1981",
    yearOfBirth: 1981,
    wizard: true,
    ancestry: "",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "hare",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Evanna Lynch",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/luna.jpg",
    id: 8
  },
  {
    name: "Ginny Weasley",
    alternate_names: [],
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "11-08-1981",
    yearOfBirth: 1981,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "brown",
    hairColour: "red",
    wand: {
      wood: "yew",
      core: "",
      length: "",
    },
    patronus: "horse",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Bonnie Wright",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ginny.jpg",
    id: 9
  },
  {
    name: "Sirius Black",
    alternate_names: ["Padfoot", "Snuffles"],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "03-11-1959",
    yearOfBirth: 1959,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "black",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "hare",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Gary Oldman",
    alternate_actors: ["James Walters", "Rohan Gotobed"],
    alive: false,
    image: "http://hp-api.herokuapp.com/images/sirius.JPG",
    id: 10
  },
  {
    name: "Remus Lupin",
    alternate_names: ["Professor Lupin", "Moony", "Remus John Lupin"],
    species: "werewolf",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "10-03-1960",
    yearOfBirth: 1960,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "brown",
    wand: {
      wood: "cypress",
      core: "unicorn tail-hair",
      length: 10.25,
    },
    patronus: "wolf",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "David Thewlis",
    alternate_actors: [],
    alive: false,
    image: "http://hp-api.herokuapp.com/images/lupin.jpg",
    id: 11
  },
  {
    name: "Arthur Weasley",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "06-02-1950",
    yearOfBirth: 1950,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "weasel",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Mark Williams",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/arthur.jpg",
    id: 12
  },
  {
    name: "Bellatrix Lestrange",
    alternate_names: ["Bella"],
    species: "human",
    gender: "female",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: 1951,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "brown",
    hairColour: "black",
    wand: {
      wood: "walnut",
      core: "dragon heartstring",
      length: 12.75,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Helena Bonham Carter",
    alternate_actors: [],
    alive: false,
    image: "http://hp-api.herokuapp.com/images/bellatrix.jpg",
    id: 13
  },
  {
    name: "Lord Voldemort",
    alternate_names: ["Tom Marvolo Riddle"],
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "31-12-1926",
    yearOfBirth: 1926,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "red",
    hairColour: "bald",
    wand: {
      wood: "yew",
      core: "phoenix feather",
      length: 13.5,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Ralph Fiennes",
    alternate_actors: [],
    alive: false,
    image: "http://hp-api.herokuapp.com/images/voldemort.jpg",
    id: 14
  },
  {
    name: "Horace Slughorn",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: "",
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "green",
    hairColour: "blonde",
    wand: {
      wood: "cedar",
      core: "dragon heartstring",
      length: 10.25,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Jim Broadbent",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/slughorn.JPG",
    id: 15
  },
  {
    name: "Lucius Malfoy",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "",
    yearOfBirth: 1954,
    wizard: true,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: {
      wood: "elm",
      core: "dragon heartstring",
      length: 18,
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    actor: "Jason Isaacs",
    alternate_actors: [],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/lucius.jpg",
    id: 16
  },
  {
    name: "Albus Dumbledore",
    alternate_names: [],
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "",
    yearOfBirth: 0,
    wizard: true,
    ancestry: "half-blood",
    eyeColour: "blue",
    hairColour: "silver",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Richard Harris",
    alternate_actors: ["Michael Gambon"],
    alive: false,
    image: "",
    id: 17
  },
  {
    name: "Madam Pomfrey",
    alternate_names: ["Poppy Pomfrey"],
    species: "human",
    gender: "female",
    house: "",
    dateOfBirth: "",
    yearOfBirth: "",
    wizard: true,
    ancestry: "",
    eyeColour: "",
    hairColour: "",
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Gemma Jones",
    alternate_actors: [],
    alive: true,
    image: "",
    id: 18
  }
];

export default data;