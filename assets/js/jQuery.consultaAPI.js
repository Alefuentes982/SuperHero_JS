
jQuery.fn.consultaAPI = function (urlApi) {
    /*console.log(urlApi);*/
     
    //voy a devolver la respuesta de una promesa como valor de retorno. 
    return new Promise(function (resolve, reject) {

        $.ajax({
            type: "GET",
            url: urlApi,
            dataType: "json",
            success: function (data) {
                // convierto los datos a una cadena JSON
                var jsonData = JSON.stringify(data);
                // guardo los datos en sessionStorage
                sessionStorage.setItem('superheroData', jsonData);
                //si la promesa se resuelve correctamente devuelvo la data 
                resolve(data);
            },
            //sino devuelvo error
            error: function (jqXHR, textStatus, errorThrown) {
                reject(error);
            }
        });
    });
};
