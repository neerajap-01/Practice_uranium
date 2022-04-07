//creating an array of data containing values as names of candidates

const candidates = ["Sainath","Aayush","Chanchal","Ekta","Prathmesh","Sudhanshu","Neeraj","Amit","Neel","Yash"];

//creating a array of data containing values as names of movies below

const moviesArray = ["Avatar", "Titanic", "Inception", "The Avengers", "Harry Potter", "Jurassic Park", "Promethus" ,"The Shawshank Redemption", "Resident Evil", "Cars"]

//creating a array of objects have two key pair values as id and movie name

const objMovieArr = [
    {
        id: 1,
        movieName: "Avatar"
    },
    {
        id: 2,
        movieName: "Titanic"
    },
    {
        id: 3,
        movieName: "Inception"
    },
    {
        id: 4,
        movieName: "The Avengers"
    },
    {
        id: 5,
        movieName: "Harry Potter"
    },
    {
        id: 6,
        movieName: "Jurassic Park"
    },
    {
        id: 7,
        movieName: "Promethus"
    },
    {
        id: 8,
        movieName: "The Shawshank Redemption"
    },
    {
        id: 9,
        movieName: "Resident Evil"
    },
    {
        id: 10,
        movieName: "Cars"
    }
]

module.exports.nameStud = candidates;
module.exports.movieName = moviesArray;
module.exports.movieNameObj = objMovieArr;