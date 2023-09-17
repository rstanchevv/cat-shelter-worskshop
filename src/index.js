const express = require('express')
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const routes = require('./routes')

const app = express();
const PORT = 3000;

expressConfig(app);
handlebarsConfig(app);
app.use(routes)

app.listen(3000, () => console.log(`Listening on port: ${PORT}`))

