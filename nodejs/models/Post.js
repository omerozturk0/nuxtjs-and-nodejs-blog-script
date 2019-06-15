const mongoose = require('mongoose'),
  mongoosePaginate = require('mongoose-paginate-v2'),
  Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: 'This field is required.'
  },
  subtitle: {
    type: String,
    required: 'This field is required.'
  },
  author: {
    type: String,
    required: 'This field is required.'
  },
  content: {
    type: String,
    required: 'This field is required.'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'active', 'deactive']
    }],
    default: ['pending']
  }
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Posts', PostSchema);
