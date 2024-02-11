const mongoose = require('mongoose')

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    born: {
        type: String,
        required: true
    },
    nameInMovie: {
        type: String,
        required: true
    },
    castImage: {
        type: String,
        required: true,
        validate: {
            validator(value){
                return /^https?:\/\//.test(value);
            },
            message: (props)=> `${props} is invalid url for the image`
        }
    }
     // movies: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Movie'
    // }]
})

const Cast = mongoose.model('Cast', castSchema)
module.exports = Cast