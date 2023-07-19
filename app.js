const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()

const crudRoutes = require('./routes/crud')

app.use(express.json())
app.use(crudRoutes)

app.listen(PORT, () => {
    console.log('Server listening on PORT:', PORT)
})