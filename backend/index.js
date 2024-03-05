const express = require('express');

const app = express();

const PORT = process.env.PORT || 2000;

app.use(express.json());
const cors = require('cors');
app.use(cors());
const dbConnect = require("./config/database");

dbConnect();

const route = require('./routes/routes')
app.use(route);

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});
