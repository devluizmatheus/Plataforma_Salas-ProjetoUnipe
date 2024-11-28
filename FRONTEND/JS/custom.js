// Executar quando o documento HTML for completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Recebe o SELETOR calendar do atributo id
    var calendarEl = document.getElementById('calendar');

    // Instanciar FullCalendar.Calendar e atribuir a variável calendar
    var calendar = new FullCalendar.Calendar(calendarEl, {
      // Bootstrap
      themeSystem: 'bootstrap5',
      // Criar o cabeçalho
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      locale: 'pt-br',
      //Data inicial
      initialDate: '2024-11-25',
      

      // Permitir clicar nos nomes dos dias da semana
      navLinks: true, // can click day/week names to navigate views

      // Permitir clicar e arrastar o mouse sobre vários dias no calendário
      selectable: true,

      // Permitir Indicar visualmente a área que está selecionada antes que o usuário solte o botão do mouse para
      //confiarmar a seleção
      selectMirror: true,
      
      // Permitir arrastar e redimensionar os eventos diretamente no calendário
      editable: true,

      dayMaxEvents: true, // allow "more" link when too many events
      events: 'listar_eventos.php',

      eventClick: function (info) {

        // Receber o SELETOR da janela modal
        const visualizarModal = new bootstrap.Modal(document.getElementById("visualizarModal")); 

        // Enviar para a janela modal os dados do evento
        document.getElementById("visualizar_id").innerText = info.event.id;
        document.getElementById("visualizar_title").innerText = info.event.title;
        document.getElementById("visualizar_start").innerText = info.event.start.toLocaleString();
        document.getElementById("visualizar_end").innerText = info.event.end !== null ? info.event.end.toLocaleString() : info.event.start.toLocaleString();

        // Abrir a janela modal
        visualizarModal.show();
    },
    //Abrir a janela modal cadastrar quando clicar sobre o dia no calendário
    select: function(info){
      
      // Receber o SELETOR da janela modal
      const cadastrarModal = new bootstrap.Modal(document.getElementById("cadastrarModal")); 

      document.getElementById("cad_start").value = converterData(info.start);
      document.getElementById("cad_end").value = converterData(info.end);
      // Abrir a janela modal cadastrar
      cadastrarModal.show();
    }
});

    calendar.render();

    // Converter a data
    function converterData(data) {

      // Converter a string em um objeto Date
      const dataObj = new Date(data);

      // Extrair o ano da data
      const ano = dataObj.getFullYear();

      // Obter o mês, mês começa de 0, padStart adiciona zeros à esquerda para garantir que o mês tenha dígitos
      const mes = String(dataObj.getMonth() + 1).padStart(2, '0');

      // Obter o dia do mês, padStart adiciona zeros à esquerda para garantir que o dia tenha dois dígitos
      const dia = String(dataObj.getDate()).padStart(2, '0');

      // Obter a hora, padStart adiciona zeros à esquerda para garantir que a hora tenha dois dígitos
      const hora = String(dataObj.getHours()).padStart(2, '0');

      // Obter minuto, padStart adiciona zeros à esquerda para garantir que o minuto tenha dois dígitos
      const minuto = String(dataObj.getMinutes()).padStart(2, '0');

      // Retornar a data
      return `${ano}-${mes}-${dia} ${hora}:${minuto}`;
  }

  // Receber o SELETOR do formulário cadastrar evento
  const formCadEvento = document.getElementById("formCadEvento");

  if(formCadEvento){

    // Aguardar o usuario clicar no botao cadastrar
    formCadEvento.addEventListener("submit", async (e) =>{

      //Não permitir a atualização da página
      e.preventDefault();

      // Receber os dados do formulário
      const dadosForm = new FormData(formCadEvento);

      // Chamar o arquivo PHP responsável em salvar o evento
      const dados = await fetch("cadastrar_evento.php", {
        method: "POST",
        body: dadosForm,

      });  
        // Realizar a leitura dos dados retornados pelo PHP
        const resposta = await dados.json();
        
        // Acessa o IF quando não cadastrar com sucesso
        if(!resposta['status']) {
          
          document.getElementById("msgCadEvento").innerHTML = `<div class="alert alert-danger" role="alert">${resposta['msg']}</div>`
        }
    });
  }

  // Receber o SELETOR da mensagem genérica
  const msg = document.getElementById("msg");

  // Receber o SELETOR da mensagem cadastrar evento
  const msgCadEvento = document.getElementById("msgCadEvento");

  // Receber o SELETOR do botão da janela modal cadastrar evento
  const btnCadEvento = document.getElementById("btnCadEvento");

  });