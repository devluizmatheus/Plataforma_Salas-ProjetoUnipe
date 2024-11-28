<?php
    // Incluir o arquivo com a conexão com o banco de dados
    include_once './conexao.php';

    // Query para recuperar os eventos
    $query = "SELECT id, title, color, start, end FROM events";

    // Prepara a QUERY
    $result_events = $conn->prepare($query);

    // Executa a QUERY
    $result_events->execute();

    // Criar o array que recebe os eventos
    $eventos = [];

    while ($row_events = $result_events->fetch(PDO::FETCH_ASSOC)) {
        // Extrair o array
        extract($row_events);

        // Adicionar evento ao array
        $eventos[] = [
            'id' => $id,
            'title' => $title,
            'color' => $color,
            'start' => $start,
            'end' => $end,
        ];
    }

    // Retornar os eventos em formato JSON
    echo json_encode($eventos);
?>
