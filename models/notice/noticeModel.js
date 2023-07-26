const { Schema, model } = require("mongoose");
const { schemaError } = require("../../utils");

const noticeSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 16,
      required: [true, "Set name for pet"],
    },
    category: {
      type: String,
      required: true,
      enum: ["sell", "lost-found", "for-free"],
    },
    date: {
      type: Date,
      required: [true, "Set birthday date for pet"],
    },
    type: {
      type: String,
      required: true,
    },
    fileUrl: { type: String, required: true },
    fileId: { type: String, required: true },
    comments: {
      type: String,
      maxlength: 120,
    },
    title: {
      type: String,
    },
    sex: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    location: {
      type: String,
      minlength: 2,
    },
    price: {
      type: Number,
      min: 1,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: false }
);

noticeSchema.post("save", schemaError);

const Notice = model("notice", noticeSchema);

module.exports = { Notice };
