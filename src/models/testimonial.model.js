import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },
    customerPosition: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },
    customerCompany: {
      type: String,
      required: true,
      trim: true,
      maxLength: 25,
    },
    customerImage: {
      type: String,
      trim: true,
    },
    customerSocialId: {
      // LinkedIn, Twitter, Instagram, etc.
      type: String,
      trim: true,
    },
    customerReview: {
      type: String,
      required: true,
      trim: true,
      minLength: 4,
      maxLength: 255,
    },
    rating:{
      type:Number,
      required:true,
      min:1,
      max:5,
    },
    
    testimonialGivenTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
   
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
