const express = require('express');
const cors = require('cors');
const router = require('./router');
const config = require('./config');

const app = express();

app.use(cors({ origin: ["http://localhost:5173", "http://localhost:3000"]}));
app.use(express.json());
app.use(router);

app.listen(config.PORT, () => console.log(`[server]: Server is listening on port ${config.PORT}.`));