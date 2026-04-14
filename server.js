const express = require("express");
const { criarBanco } = require("./database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
        <body> 
        <h1> Abrigo Conecta </h1>
        <p> Endpoint que leva aos dados dos pacientes cadastrados: /infoAbrigos </p>
        </body>
        `);
});

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})

app.get('/infoAbrigos', async (req, res) => {
    const db = await criarBanco()
    const listaAbrigos = await db.all(`SELECT * FROM infoAbrigos`)
    res.json(listaAbrigos)
})

app.post('/infoAbrigos', async (req, res) => {
    const { nome_local, endereco, capacidade_total, vagas_disponiveis,status, telefone } = req.body;

    await db.run(`
        INSERT INTO infoAbrigos
        (nome_local, endereco, capacidade_total, vagas_disponiveis, status, telefone)
        VALUES (?, ?, ?, ?, ?, ?)`,
         [nome_local, endereco, capacidade_total, vagas_disponiveis, status, telefone]
 )
 res.json({ mensagem: `O abrigo ${nome_local} foi cadastrado com sucesso!`})
})

app.put('/infoAbrigos/:id', async (req,res) => {
    const { id } = req.params;
    const { vagas_disponiveis, status } = req.body;

    await db.run(`
       UPDATE infoAbrigos
       SET vagas_disponiveis = ?, status = ? WHERE id = ?`,
       [vagas_disponiveis, status, id] 
        
        );

        res.json({ mensagem: `Abrigo ${id} atualizado com sucesso! `})
});

