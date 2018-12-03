/*
 * bot.js
 *
 * In this file:
 * - received message from a connected channel will be transformed with Recast.AI SDK
 * - received message from test command will be processed by Recast.AI
 *   You can run this command for testing:
 *   curl -X "POST" "http://localhost:5000" -d '{"text": "YOUR_TEXT"}' -H "Content-Type: application/json; charset=utf-8"
 *
 *
 * The Recast.AI SDK will handle the message and call your reply bot function (ie. replyMessage function)
 */

const recastai = require('recastai').default;

// Instantiate Recast.AI SDK
// TODO change id
const client = new recastai.build('b6a1eb949c190a75351f8890b6a5f4cf');

/*
 * Main bot function
 * Parameters are:
 * - body: Request body
 * - response: Response of your server (can be a blank object if not needed: {})
 */

var reply = (request, response) => {
	var text = request.body['question'];
	var convid = request.body['conversation_id'];
	return client.dialog({
			type: 'text',
			content: text
		}, {
			conversationId: convid
		})
		.then(nlp => {
			reply = generateAnswer(nlp);
			return reply;
		})
}

/*
 * Returns an answer randomly taken from a map
 */
var generateAnswer = (data) => {
	var that = this;
	return new Promise(
		function (resolve, reject) {
			//check if additional actions are needed
			var aMessage = data.messages;
			return resolve(aMessage);
		});
}

module.exports = {
	reply
}