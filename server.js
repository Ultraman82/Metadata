//ger our requirement
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res,next)=>{
  res.sendFile(__dirname + "/index.html")
})

app.post('/upload', upload.single('file'), function(req,res,next){
  res.send('The file size : ' + req.file.size);
});
// var mongoose = require('mongoose');
// var searchTerm = require('./models/searchTerm');






// mongoose.connect(process.env.MONGODB_URI || 'mongodb://bauhause:bau0099@ds121456.mlab.com:21456/edgar');

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Port 3000 is Running');
});
