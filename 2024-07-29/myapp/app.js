const express = require('express');

const app = express();

// localhost:3000/hello-string
app.get('/hello-string', function (request, response) {
  return response.send('Hello, String!');
});

// localhost:3000/hello-json
app.get('/hello-json', (req, res) => {
    const data = {
        "message": "Hello, JSON!",
        "nome": "Isabelly Moraes"
    }
    return res.status(201).json(data)
});

// GET localhost:3000/api/users
const users = [
    { id: 1, username: "imoraes", status: "Disponível" },
    { 
        id: 2,
        username: "jao",
        status: "Ocupado" 
    },
]
users.push({ id: 3, username: "carlos", status: "Na escola"})
const usuario = { id: 4, username: "fulano", status: "No trabalho"}
users[users.length] = usuario

const PORT = process.env.PORT || 3000;
const onServerStart = function () {
  console.log(`Server is runnig on port ${PORT}`);
};

app.listen(PORT, onServerStart);
