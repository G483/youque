const express = require('express')
const app = express()
const path = require('path')
const staticPath = path.join(__dirname, 'public')

const youtubeSearch = require('./src/api/clients/youtubeClient')

app.use(express.static(staticPath))

const apiRouter = express.Router()

app.get('/', (req, res) => {
  res.contentType('text/html')
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/mockup', (req, res) => {
  res.contentType('text/html')
  res.sendFile(path.join(__dirname+'/mockup.html'))
})

apiRouter.get('/youtube-search/:searchQuery', (req, res) => {
  let result = youtubeSearch(req.params.searchQuery)
  return res.send(result)
});

app.use('/api', apiRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
