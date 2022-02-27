/*La animación es bastante simple. Al presionar sobre el botón mostrar,
se ve una lampara y, a los segundos, se paga la luz y la lámpara se enciende*/

const inicio = () => {
    
    //Creamos la estructura de la página
    $('body').append('<header></header>');
    $('body').append('<main></main>');
    $('header').append('<div class="container-fluid">' +
                            '<h1>Desafío: Animaciones Encadenadas</h1>'+
                        '</div>');

    $('main').append('<div class="container-md" id="escenario">' +
                        '<i class="bi bi-lamp" id="lampara-apagada"></i>' +
                        '<i class="bi bi-lamp-fill" id="lampara-encendida"></i>' +
                    '</div>');

    $('main').append('<div class="container-sm" id="control">' +
                    '<button id="animacion">Animar</button>' +
                '</div>');

    //Le damos el formato a los elementos y escondemos la lámpara encendida, al igual que el div
    $('i').css({"font-size":"72px",
                "text-align":"center"
                });

    $('div').css({"display":"grid",
                    "text-align":"center"
                });

    $('#escenario').hide();
    $('#lampara-encendida').hide()
                            .css("color","red");
}

const agregarAnimaciones = () => {
    const atardecer = () => {
        $("#lampara-apagada").hide();
        $("#lampara-encendida").show();
        $("#escenario").css({"background-color":"black"});
    }

    const mostrar = () => {
        $("#escenario").slideDown(3000, atardecer)
                        .delay(2000)
                        .slideUp()
    }

    $("#animacion").click(mostrar);
};

$(() => {
    inicio();
    agregarAnimaciones();
});