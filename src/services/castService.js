const Movie = require('../models/Movie.js')
const Cast = require('../models/Cast.js')

exports.create=(data)=> Cast.create(data)
exports.getAll =()=> Cast.find()
exports.getByIds = (castIds)=>{
    const casts = Cast.find({_id: {$in: castIds}})
    return casts
}