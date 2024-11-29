CREATE DATABASE formulario-ps; 
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(110) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    genero VARCHAR(15) NOT NULL,
    dataNascimento date,
    cidade VARCHAR(45) NOT NULL,
    estado VARCHAR(45) NOT NULL,
    endereco VARCHAR(45) NOT NULL,

)