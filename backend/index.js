const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`)
})