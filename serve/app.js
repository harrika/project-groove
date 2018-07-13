const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8000


const app = express()
app.use(bodyParser.json())
app.use(cors())

// app.get('/status',function(req,res) {
app.get('/',function(req,res) {
	res.send({
		message: 'kyi kati'
	})
})


app.listen(port, function(){
	console.log("connected to "+port)
})





