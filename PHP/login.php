<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | PS</title>
</head>
<body>
    <a href="/PHP/home.php">Voltar</a>
    <div>
        <h1>Login</h1>
        <form action="/PHP/testLogin.php" method="POST">
            <input type="text" name="email" placeholder="Email">
            <br><br>
            <input type="password" naame="senha" placeholder="Senha">
            <br><br>
            <input type="submit" name="submit" value="Enviar">
            </form>
    </div>
</body>
</html>
