const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;
const loginRoutes = require('./src/stockUkar/login/routes');
const dashDoardRoutes = require('./src/stockUkar/main/dashboard/routes')
const bodyParser = require('body-parser');
const ingredientRoutes = require('./src/stockUkar/main/ingredients/routes')


app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res) => {
    res.send("WELCOME TO UkarFood's Backend Express");
})
app.use('/login',loginRoutes)
app.listen(port,() => {
    console.log(`the serve is running at port ${port}`);
})
app.use('/main/dashDoard',dashDoardRoutes)
app.use('/ingredient',ingredientRoutes)
app.use('ingredients/api/search',ingredientRoutes)