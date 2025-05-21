const mongoose = require('mongoose');

mongoose.connect('your_connection_string_here', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));