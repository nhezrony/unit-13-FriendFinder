const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))