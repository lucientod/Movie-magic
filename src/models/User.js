const { Schema, model, MongooseError } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.virtual('rePassword').set(function (value) {
    if (value !== this.password) {
        throw new MongooseError('Passwords doesn\'t match!')
    }
})

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 11)
    this.password = hash;
})

const User = model('User', userSchema)

module.exports = User