const express = require('express')
const app = express()
const path = require('path')
const staticPath = path.join(__dirname, 'public')

app.use(express.static(staticPath))

app.get('/', (req, res) => {
  res.contentType('text/html')
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
