const express = require("express");
const rotaLivro = require("./rotas/livros")
const cors = require('cors');

const app = express();
app.use(express.json(), cors({origin: "*"}))

app.use('/livros', rotaLivro)

const port = 8000;

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
})