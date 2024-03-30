
$(document).ready(function () {

    $("form").submit(function (event) {

        event.preventDefault();
        const searchTerm = $("#idHero").val().trim();
        /* Valida el valor del input (idHero) con condicion y expresion regular */
        if (!searchTerm.match(/^\d+$/)) {
            alert("Por favor, ingresa solo números.");
            return;
        } else if (searchTerm < 1 || searchTerm > 731) {
            alert('Debe ingresar un numero entre el 1 y el 731');
        } else {
            sessionStorage.clear(); //Limpio el session Storage de lo que tenga alamacenado previamente
            const apiKey = "4905856019427443";
            const apiUrl = `https://superheroapi.com/api.php/${apiKey}/${searchTerm}`;

            /*console.log(apiUrl);*/
            /*console.log(searchTerm);*/

            //invoco mi funcion consultaAPI y el resultado de la funcion que contiene mi promesa lo puedo procesar segun lo que requiera
            $('#idHero').consultaAPI(apiUrl)
                //el metodo .then() me permite acceder al valor resuelto de mi promesa si esta se cumplio o manejar el error si la promesa fue rechazada
                .then(function (data) {

                    sessionStorage.setItem('heroData', JSON.stringify(data)); //Guardo los datos en la session storage
                    window.location.href = 'datosHeroe.html';  //abro la pagina datosHeroe donde manipulare los datos para mostrarlos
                    /*    
                    console.log(data);
                    console.log(`Nombre: ${data.name}`);
                    console.log(`Conexiones: ${data.connections["group-affiliation"]}`);
                    console.log(`Publicado por: ${data.biography.publisher}`);
                    console.log(`Ocupacion: ${data.work.occupation}`);
                    console.log(`Primera Aparicion: ${data.biography["first-appearance"]}`);
                    console.log(`Altura: ${data.appearance.height[0]} - ${data.appearance.height[1]}`);
                    console.log(`Peso: ${data.appearance.weight[0]} - ${data.appearance.weight[1]}`);
                    console.log(`Alianzas: ${data.alia}`);
                    */
                })
                .catch(function (error) {
                    console.error("Error al procesar la solicitud:", error);
                });
        }
    });
});