$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue")
        $('p').css("background-color", "blue")
        $('p').hide; //some de vez
        
    });

    $('#vermelho').click(function(){
        //$('p').css("color", "red");
        //$('p').fadeOut; // esconde de forma suave
        //$('p').delay(3000); //microsegundos 
        // $('p').fadeIn('slow'); //aparece e aparece mais lento | fast -> faz mais rápido
        //e se colocar 5000, ele vai aparecer depois de 5s
        debugger;
        $('p').css("background-color", "red");
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css({color: 'red', border: '1px solid red'})  //backgroundColor: '#F08080'
            .delay(3000)
            .fadeOut('fast')
            .addClass('green')
           // $('button').removeClass('red');
    }); 
});