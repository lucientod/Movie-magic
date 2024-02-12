const Movie = require('../models/Movie.js')
const Cast = require('../models/Cast.js')

// let movies = [{
//     _id: 1,
//     title: 'Jungle Cuise',
//     genre: 'Adventure',
//     director: 'Spilberg',
//     year: '2019',
//     imageUrl: '/img/jungle-cruise.jpeg',
//     rating: '4',
//     description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.'
// }]
exports.search = (title, genre, year) => {
    let query = {}

    if (title) {
        query.title = new RegExp(title, "i")
    }
    if (genre) {
        query.genre = genre.toLowerCase() //new RegExp(genre, "i")
    }
    if (year) {
        query.year = year
    }
    console.log(query)
    return Movie.find(query)
}

exports.create = (movieData) => { Movie.create(movieData) }

exports.getAll = () => {
    return Movie.find()
}

exports.getOne = (movieID) => {
    const movie = Movie.findById(movieID).populate('casts')
    return movie
}

exports.attach = async (movieId, castId) => {
    // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    const movie = await this.getOne(movieId);

    // This is optional and we don't need it in this case
    // const cast = await Cast.findById(castId);
    // cast.movies.push(movie);
    // await cast.save();

    // TODO: validate castId if exists
    // TODO: validate if cast is already added
    movie.casts.push(cast);

    await movie.save();

    return movie;
}
