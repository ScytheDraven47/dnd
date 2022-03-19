import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 3333

app.get('/', (req, res) => {
	res.send(`Hello World! ${req}`)
})

app.get('/r/:subreddit', (req, res) => {
	const { subreddit } = req.params
	fetch(`https://www.reddit.com/r/${subreddit}.json`)
		.then((resp) => {
			if (!resp.ok) throw new Error(`${resp.status} ${resp.statusText}`)
			return resp.json()
		})
		.then((json) => res.send(json))
		.catch((err) => res.send(err))
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
