USE lovePets_manha;
GO

SELECT * FROM clinica;
SELECT * FROM tipoPet;
SELECT * FROM raca;
SELECT * FROM dono;
SELECT * FROM tipoUsuario;
SELECT * FROM usuario;
SELECT * FROM pet;
SELECT * FROM veterinario;
SELECT * FROM situacao;
SELECT * FROM atendimento;

-- estrutura SELECT
-- SELECT nomeColuna FROM nomeTabela

-- estrutura de JOIN
-- SELECT nomeColunas FROM nomeTabela1
-- TIPOJOIN (LEFT, RIGHT) JOIN nomeTabela2
-- condição de junção -> 
-- ON tabela1.coluna1 (PK || FK) = tabela2.coluna2 (FK || PK)
-- WHERE, ORDER BY (OPCIONAL)

-- listar todos os veterinários (nome e CRMV) de uma clínica (razão social)
SELECT nomeVeterinario, CRMV, razaoSocial FROM veterinario
INNER JOIN clinica
ON veterinario.idClinica = clinica.idClinica

-- listar todas as raças que começam com a letra S
SELECT * FROM raca
WHERE nomeRaca LIKE 's%';

-- listar todos os tipos de pet que terminam com a letra O
SELECT * FROM tipoPet
WHERE nomeTipoPet LIKE '%o';

-- listar todos os pets mostrando os nomes dos seus donos
SELECT nomePet, ra, nomeDono FROM pet
INNER JOIN dono
ON dono.idDono = pet.idDono;

-- listar todos os atendimentos mostrando o nome do veterinário que atendeu,
-- o nome, a raça e o tipo do pet que foi atendido, o nome do dono do pet 
-- e o nome da clínica onde o pet foi atendido
SELECT dataAtendimento [data], nomeVeterinario AS [veterinário], nomePet pet, nomeRaca [raça],
nomeTipoPet tipo, nomeDono dono, razaoSocial [razao social], endereco
FROM atendimento A
INNER JOIN pet P
ON A.idPet = P.idPet
INNER JOIN dono D
ON D.idDono = P.idDono
INNER JOIN veterinario V
ON A.idVeterinario = V.idVeterinario
INNER JOIN raca R
ON R.idRaca = P.idRaca
INNER JOIN clinica C
ON C.idClinica = V.idClinica
INNER JOIN tipoPet TP
ON TP.idTipoPet = R.idTipoPet;

-- comando para atualizar a situação de um atendimento
UPDATE atendimento 
SET idSituacao = 3
WHERE idAtendimento = 3;

-- string Email, string Senha

SELECT * FROM usuario
WHERE email = 'saulo@email.com' AND senha = 'saulo123';

SELECT * FROM atendimento
WHERE idVeterinario = 1