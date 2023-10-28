const mongoose= require("mongoose")
const validator= require("validator")

const companyschema=new mongoose.Schema({
    Date:{
        type:Date,
        default:Date.now },

 CompanyName:{
              type:String, 
              required: true },

    Country:{type:String,
                    required:true},

     PostalAdddress:Number,
     
    TelephoneNumber:Number,

     Cell_NO:{
         type:Number
     },

     Website: {
         type:String},
     
    Email: {
             type:String,
              required:true,
             // unique:[true," Email is already exists"],
          validate:{ 
            validator:validator.isEmail,
            message: "{value} is not valid email" }
        },


        CareOf_Name:String,
         
        CareOf_cell:{
            type:Number
        },
        
        CareOf_Address:String,

        CreateDate_or_RenameDateToCreatedDate:{
            type:Date,
       default:Date.now
        },

        CreatedAt:{
            type:Date,
            default: Date.now
        },
        UpdateAt:{
            type:Date,
            default: Date.now
        },
        DeleteAt:{
            type:Date,
            default: Date.now
        },

        CompanyUnique_id:{type:Number,
                          unique:true},
        Status:String
     })



     
 // Candiate Schema
 const Condidateschema= new mongoose.Schema({
    Date:{
     type:Date,
     default:Date.now },
     EmigrantsRegistrationNo:Number,
     Name:String,
     FatherName:String,
     CNIC:Number,
     DateOFBirth:Date,
     PlaceOfBirth:String,
     Address:String,
     TelephoneNumber:Number,
     Mobile_CandidateNo:Number,
     Email:{type:String,
         required:true,
         //unique:true,
         validate:{
            validator:validator.isEmail,
            message:"{value} is not valid Email"
         }}
     })

            
 // model for company data
 const company= new mongoose.model("company",companyschema)
// model for candidate data
const candidate= new mongoose.model("candidate", Condidateschema)


 module.exports={company, candidate}