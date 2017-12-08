const express = require('express')
const multer = require('multer')
const path = require('path')

const convert = require('./lib/convert')
const data = require('./lib/data')

const app = express()

const upload = multer({ storage: multer.memoryStorage() })

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('public/index.html')
})

app.post('/convert', upload.single('file'), (req, res) => {
  try {
    const converted = convert(data(JSON.parse(req.file.buffer)))
    res.header(
      'Content-Disposition',
      `attachment; filename="${path.parse(req.file.originalname).name}.csv"`
    )
    res.contentType('text/csv; charset=latin1')
    res.send(Buffer.from(converted, 'latin1'))
  } catch (err) {
    res.status(
      err instanceof SyntaxError || err instanceof TypeError ? 400 : 500
    ).send(err.toString())
    console.log(err)
  }
})

app.listen(process.env.NODE_ENV === 'production' ? 80 : 3000)
