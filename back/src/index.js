const express = require('express');
const cors = require('cors');
const root = require('./routes/root');

const app = express();
app.use(cors());
const port = 3001;

app.use('/', root);

app.listen(port, () => console.log(`Back listening at http://localhost:${port}`));
