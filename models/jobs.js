const mongoose = require('mongoose')
const validator = require('validator')
const jobSchema = new mongoose.jobSchema({
    title : {
        type : String,
        require : [true, "Please provide a title"],
        trim : true,
        maxlength : [100, 'Jobs can not be exceeded 100 characters']
    },
    slug : String,
    description : {
        type : String,
        require : [true, "Please provide a Job description"],
        maxlength : [1000, "Job description can not exceed 1000 characters"]
    },
    email : {
        type : String,
        validate : [validator.isEmail,'please provide a valid email address']
    },
    address : {
        type : String,
        required : [true, "Please provide an address"]
    },
    company : {
        type : String,
        required : [true, "Please provide a company name"]
    },
    industry : {
        type : [String],
        required : true,
        enum : {
            values : ['Business', 'Information Technology', 'Banking',
        'Education', 'Telecommunication','others'],
        message : 'Please select correct optiions for industry.'
        }
    },
    jopType : {
        type : String,
        required : true ,
        enum : {
            values : [
                'Permanent', 'Temporary', 'InternShip'
            ],
            message : "please select correct options for job type. "
        }
    }
})