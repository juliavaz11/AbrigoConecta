const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const criarBanco = async () => {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS infoAbrigos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_local TEXT,
    endereco TEXT,
    capacidade_total TEXT,
    vagas_disponiveis TEXT,
    status TEXT,
    telefone TEXT
    )
    `);

  console.log(
    "Banco de dados configurado: A tabela está pronta para receber as informações dos abrigos cadastrados!",
  );

  const checagem = await db.get(`SELECT COUNT(*) AS total FROM infoAbrigos`);

  if (checagem.total === 0) {
    await db.exec(`
            INSERT INTO infoAbrigos
        (nome_local, endereco, capacidade_total, vagas_disponiveis, status, telefone) VALUES
        ('Clube Geraldo Santana', 'Rua Luiz de Camões, 337 - Santana, Porto Alegre - RS, 90640-030', '200', '35', 'Disponível', '(51) 3333-1111'),

('Basílica Nossa Senhora das Dores', 'Rua dos Andradas, 587 - Centro Histórico, Porto Alegre - RS, 90020-005', '150', '0', 'Lotado', '(51) 3333-2222'),

('PUCRS - Centro Esportivo', 'Avenida Ipiranga, 6681 - Partenon, Porto Alegre - RS, 90619-900', '300', '120', 'Disponível', '(51) 3333-3333'),

('Centro Humanitário de Acolhimento Rubem Berta', 'Avenida Bernardino Silveira Amorim, 2200 - Rubem Berta, Porto Alegre - RS, 91170-010', '250', '60', 'Disponível', '(51) 3333-4444'),

('CHA Recomeço', 'Rua Engenheiro Irineu Carvalho Braga, 2785 - Rio Branco, Canoas - RS, 92200-380', '180', '20', 'Disponível', '(51) 3333-5555'),

('CHA Esperança', 'Rua São Borja, 150 - Mathias Velho, Canoas - RS, 92330-000', '200', '0', 'Lotado', '(51) 3333-6666'),

('Centro Olímpico Municipal de Canoas', 'Rua Araguaia, 1151 - Igara, Canoas - RS, 92410-300', '350', '90', 'Disponível', '(51) 3333-7777'),

('SESI Canoas', 'Rua Aurora, 1220 - Marechal Rondon, Canoas - RS, 92020-210', '220', '40', 'Disponível', '(51) 3333-8888'),

('Escola Municipal João Palma da Silva', 'Rua República, 801 - Harmonia, Canoas - RS, 92310-000', '160', '15', 'Disponível', '(51) 3333-9999'),

('Colégio São Luís', 'Rua Ramiro Barcelos, 2285 - Bom Fim, Porto Alegre - RS, 90035-007', '140', '0', 'Lotado', '(51) 3333-0000'),

('Ginásio Tesourinha', 'Avenida Érico Veríssimo, 843 - Menino Deus, Porto Alegre - RS, 90160-181', '280', '75', 'Disponível', '(51) 3344-1111'),

('Escola Estadual Júlio de Castilhos', 'Praça Piratini, 76 - Centro Histórico, Porto Alegre - RS, 90020-140', '190', '0', 'Lotado', '(51) 3344-2222'),

('Colégio Estadual Protásio Alves', 'Avenida Ipiranga, 1090 - Azenha, Porto Alegre - RS, 90160-092', '210', '50', 'Disponível', '(51) 3344-3333'),

('Ginásio Municipal de São Leopoldo', 'Rua Dom João Becker, 313 - Centro, São Leopoldo - RS, 93010-010', '260', '30', 'Disponível', '(51) 3344-4444'),

('Escola Municipal Castro Alves', 'Rua Independência, 450 - Centro, Esteio - RS, 93260-000', '170', '10', 'Disponível', '(51) 3344-5555'),

('Centro de Eventos FIERGS', 'Avenida Assis Brasil, 8787 - Sarandi, Porto Alegre - RS, 91140-001', '400', '150', 'Disponível', '(51) 3344-6666'),

('Universidade La Salle Canoas', 'Avenida Victor Barreto, 2288 - Centro, Canoas - RS, 92010-000', '320', '80', 'Disponível', '(51) 3344-7777'),

('Escola Estadual Visconde do Rio Branco', 'Rua Sete de Setembro, 555 - Centro, Novo Hamburgo - RS, 93310-000', '180', '0', 'Lotado', '(51) 3344-8888'),

('Ginásio Municipal de Novo Hamburgo', 'Rua Bento Gonçalves, 1801 - Centro, Novo Hamburgo - RS, 93410-003', '300', '65', 'Disponível', '(51) 3344-9999'),

('Escola Municipal Monteiro Lobato', 'Rua das Flores, 120 - Centro, Canoas - RS, 92000-000', '150', '25', 'Disponível', '(51) 3344-0000');


            `);
    console.log("Abrigos cadastrados no banco de dados")}
    else {
        console.log(`Banco de dados com o total de ${checagem.total} de abrigos cadastrados!`)
    }
  

  return db;
};
 module.exports = { criarBanco };
