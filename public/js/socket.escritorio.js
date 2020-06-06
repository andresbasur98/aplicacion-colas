// Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams( window.location.search ); //Parametros opcionales que vienen por la URL
if(!searchParams.has('escritorio')){  //Verificamos que exista el escritorio
    window.location ='index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
let label = $('small');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function(){
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
        console.log(resp);
        if(resp == 'No hay tickets'){
            label.text(resp);
            alert(resp);
            return;
        }

        label.text('ticket ' + resp.numero);
    })
});
