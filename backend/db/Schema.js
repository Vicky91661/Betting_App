const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONOGOOS_USER}:
${process.env.MONOGOOS_PASSWORD}@cluster0.ufffkaf.mongodb.net/${process.env.MONOGOOS_DATABASE}`)

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    role:{
        type:String,
        required:true,
        enum : ['user','admin'],
        default: 'user'
    }
})


const gameSchema = new mongoose.Schema({
    TournamentName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    teamOneName:{
        type: String,
        required: true, 
    },
    teamOnebit:{
        type: Number,
        required: true, 
    },
    teamTwoName:{
        type: String,
        required: true, 
    },
    teamTwobit:{
        type: Number,
        required: true, 
    },
    category:{
        type:String,
        required:true,
        enum : ['cricket','football'],
    }
})

const gamePurchases = new mongoose.Schema({
    userOneId: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User' ,
         require:true
    },
    userTwoId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' ,
        require:true
    },
    userOnebit:{
        type: Number,
        required: true, 
    },
    userTwobit:{
        type: Number,
        required: true, 
    },
    game_id:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Game' ,
        require:true
    }
})

const User = mongoose.model('User', userSchema);
const Game = mongoose.model('Game', gameSchema);
const Gamepurchase = mongoose.model('Gamepurchase', gamePurchases);

module.exports = {
	User,Game,Gamepurchase
};