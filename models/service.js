import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    name: String,
    image: String,
    heading: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;