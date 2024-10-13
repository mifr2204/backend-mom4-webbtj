const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//user schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First name has to be filled in"],
    },
    lastname: {
        type: String,
        required: [true, "Last name has to be filled in"],
    }, 
    email: {
        type: String,
        required: [true, "email has to be filled in"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "username has to be filled in"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "password has to be filled in"],
    }, 
    registrationDate: {
        type: Date,
        default: Date.now
    }

});

// hash passwords
userSchema.pre("save", async function(next) {
    try{
        if(this.isNew || this.isModified("password")) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }

        next();
    }catch(error) {
        next(error);
    }
});

//registration of user
userSchema.statics.registrer = async function (firstname, lastname, email, username, password) {
    try {
        const user = new this({ firstname, lastname, email, username, password });
        await user.save();
        return user;
    }catch(error){
        throw error;
    }
};

//check hashed pasword
userSchema.methods.comparePassword = async function(password) {
    try{
        return await bcrypt.compare(password, this.password);
    }catch(error) {
        throw error;
    }
};

//login
userSchema.statics.login = async function (username, password) {
    try {
        const user = await this.findOne({ username });

        if(!user) {
            throw new Error("incorrect username or password");
        }
        const isPasswordMatch = await user.comparePassword(password);

        if(!isPasswordMatch) {
            throw new Error("incorrect username or password");
        }

        return user;
    }catch(error) {
        throw error;
    }
}; 

const User = mongoose.model("User", userSchema);
module.exports = User;