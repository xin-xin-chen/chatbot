/*eslint no-console: 0*/
"use strict";

const express = require('express')
const bodyParser = require('body-parser')
var requestify = require('requestify');
var cors = require('cors')

// Load configuration
require('./config')
const bot = require('./bot')

// Load dummy data
const dummy = require('./dummyData')

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json())
app.options('*', cors())

//Description of API
app.get('/', function (req, res) {
	res.send('This is the API of a Conversational AI chatbot connector.');
})

// ask question and forward it to recast.ai
app.post('/api/askQuestion', (req, res) => {
	var sQuestion = req.body['question'];
	bot.reply(req, res)
		.then(success => {
			for (var x = 0; x < success.length; x++) {
				success[x].author = "bot";
			}
			res.status(200).send(success);
		}).catch(error => {
			console.log('Error in your bot:', error)
			if (!res.headersSent) {
				res.sendStatus(400)
			}
		})
})

// return dummy data 
app.post('/api/dummy', (req, res) => {
	dummy.getList(req, res)
		.then(success => {
			res.status(200).send({
				replies: success
			})
		}).catch(error => {
			console.log('Error fetching dummy data:', error)
			if (!res.headersSent) {
				res.sendStatus(400)
			}
		})
})


var port = process.env.PORT || 3000;

app.listen(app.get('port'), () => {
	console.log('Our connector is running on port %d', app.get('port'))
})