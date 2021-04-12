USE M_Peoples;

SELECT nome, sobrenome FROM Funcionarios;

-- Busca os funcion�rios pelo nome
SELECT idFuncionario, nome, sobrenome FROM Funcionarios 
WHERE nome = 'Catarina';

-- Busca os funcion�rios trazendo os nomes completos
SELECT CONCAT(nome, ' ', sobrenome) AS [nome completo]
FROM Funcionarios;

-- Ordena os funcion�rios atrav�s do nome 
-- de maneira crescente ou descrescente 
SELECT nome, sobrenome FROM Funcionarios
ORDER BY sobrenome ASC;