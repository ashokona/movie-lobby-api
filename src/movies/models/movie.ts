import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    yearReleased: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    actors: {
        type: [String],
        required: false
    },
    genre: {
        type: String,
        required: true,
        enum: ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Thriller", "Western"]
    },
    poster: {
        type: String,
        required: false
    }
},{timestamps:true});

export default mongoose.model("Movie", MovieSchema);