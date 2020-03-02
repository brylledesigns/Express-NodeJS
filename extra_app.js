const express = require('express')
const app = express()

var path = __dirname + '/views/'

var router = express.Router()

app.use('/',router)

// Route to access the index file from the views folder
router.get('/',function(req,res){
    res.sendFile(path+'index.html')
})

//Directory accessing your public folder
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Server is running on ${PORT}')