const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(port, () =>
{
    console.log(`Server listening at http://localhost:${port}`);
});