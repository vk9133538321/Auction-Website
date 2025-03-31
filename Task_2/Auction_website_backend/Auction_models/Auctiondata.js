const mongoose = require("mongoose")

const AuctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

const Auctiondata = mongoose.model("Auctiondata", AuctionSchema)
module.exports = Auctiondata