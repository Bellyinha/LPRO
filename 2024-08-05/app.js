const express = require('express');


const app = express();
app.use(express.json())

const times = ["barcelona", "santos", "flamengo"]
const time = "";

app.post('/api/new-game', (req, res) => {
    const getRandomTime = () => {
        // const 
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});
 