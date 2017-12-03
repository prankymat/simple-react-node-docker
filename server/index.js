const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/people', function (req, res) {
	console.log(req.query)
	res.json([{"1":"a"},{"2":"b"}]);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
