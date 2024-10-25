const mongoose = require("mongoose");

//schema Workplace
const WorkplaceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Companyname has to be filled in"],
    },
    location: {
        type: String,
        required: [true, "Location has to be filled in"],
    }, 
    startdate: {
        type: String,
        required: [true, "Startdate has to be filled in"],
    },
    enddate: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: [true, "Title has to be filled in"],
    },
    description: {
        type: String,
        required: [true, "Description has to be filled in"],
    } 
});

const Workplace = mongoose.model("Workplace", WorkplaceSchema);
module.exports = Workplace;