--Tabela de reservas
CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_agendamento DATE NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_fim TIME NOT NULL,
    descricao TEXT
);


--Tabela de laboratorios
CREATE TABLE laboratorios (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    nome VARCHAR(255) NOT NULL,       
    capacidade INT NOT NULL,            
    descricao TEXT,                    
    computadores INT NOT NULL,
    projetores INT NOT NULL,                
    disponibilidade TEXT,              
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
INSERT INTO laboratorios (nome, capacidade, descricao, computadores, projetores, disponibilidade)
VALUES 
('Laboratório de Informática 2', '20', 'Laboratório equipado com computadores de última geração e 1 projetor', '20', '1', 'disponivel'),

('Laboratório de Redes 1', '15', 'Laboratório destinado ao ensino de redes de computadores, com 1 ar condicionado', '15', '1', 'disponivel'),

('Laboratório de Programação 3', '25', 'Laboratório com mesas amplas para programação e 1 projetor', '25', '1', 'indisponivel'),

('Laboratório Multimídia 1', '40', 'Laboratório focado em edição de vídeo e áudio, com equipamentos de alta performance', '30', '2', 'disponivel'),

('Laboratório de Eletrônica 2', '10', 'Laboratório para cursos de eletrônica, com 1 projetor e 1 ar condicionado', '10', '1', 'disponivel');


-- Tabela de Usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,  
    nome VARCHAR(255) NOT NULL,         
    email VARCHAR(255) NOT NULL UNIQUE, 
    telefone VARCHAR(20),           
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);




-- exibição de recursos
CREATE TABLE recursos (
    id INT AUTO_INCREMENT PRIMARY KEY,         
    nome VARCHAR(255) NOT NULL,                
    descricao TEXT,                            
    quantidade INT NOT NULL,               
    status ENUM('disponível', 'indisponível') NOT NULL DEFAULT 'disponível' 
);
INSERT INTO recursos (nome, descricao, quantidade, status)
VALUES
('MacBook', 'O MacBook é um laptop fino e leve da Apple, conhecido pelo design elegante, desempenho rápido, 
tela Retina de alta qualidade e sistema operacional macOS. É ideal para usuários que buscam portabilidade, 
desempenho e integração com o ecossistema Apple', '4'),

('Projetor', 'O projetor é um dispositivo eletrônico utilizado para exibir imagens, vídeos ou apresentações em uma tela grande. Ideal para apresentações em grupo, reuniões e aulas.', '6', 'disponivel'),

('Tela Interativa', 'A tela interativa é um dispositivo touchscreen de grandes dimensões, usado para colaboração em tempo real, permitindo anotações e controle direto de aplicativos durante apresentações ou reuniões.', '3', 'disponivel'),

('Câmera de Conferência', 'Câmera de alta definição projetada para videoconferências, garantindo boa qualidade de imagem e som. Ideal para reuniões e colaboração remota com múltiplos participantes.', '4', 'disponivel'),

('Sistema de Áudio', 'Sistema de áudio profissional utilizado para amplificar som durante apresentações, reuniões ou eventos, proporcionando clareza e alcance de som em ambientes maiores.', '2', 'disponivel'),

('Quadro Branco Digital', 'Quadro interativo que permite aos usuários escrever, desenhar e interagir diretamente na tela, ideal para brainstorming e colaboração em equipe em tempo real.', '5', 'disponivel');
