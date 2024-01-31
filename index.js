const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', async  (req, res) => {
    return  res.send('Hello World!');
});

app.listen(3000, () => {    
    console.log('servidor Funcionando na porta 3000')
});