
$(document).ready(function () {
    // Obtengo los datos almacenados en sessionStorage
    const heroData = JSON.parse(sessionStorage.getItem('heroData'));

    /*
    console.log(heroData);
    console.log(`Nombre: ${heroData.name}`);
    console.log(`Conexiones: ${heroData.connections["group-affiliation"]}`);
    console.log(`Publicado por: ${heroData.biography.publisher}`);
    console.log(`Ocupacion: ${heroData.work.occupation}`);
    console.log(`Primera Aparicion: ${heroData.biography["first-appearance"]}`);
    console.log(`Altura: ${heroData.appearance.height[0]} - ${heroData.appearance.height[1]}`);
    console.log(`Peso: ${heroData.appearance.weight[0]} - ${heroData.appearance.weight[1]}`);
    console.log(`Alianzas: ${heroData.alia}`);
    console.log(`imagen: ${heroData.image.url}`);
    */

    // Selecciono la tarjeta existente en HTML
    const card = $('.card');

    // Creao elementos para los nuevos datos y los agrego a la card
    const cardBody = card.find('.card-body');

    // Agrego título del héroe
    const heroTitle = $('<h5>').addClass('card-title').text(`Nombre: ${heroData.name}`);
    cardBody.append(heroTitle);

    // Agrego parrafos para otros datos del heroe
    cardBody.append(`<p class="card-text">Conexiones: ${heroData.connections["group-affiliation"]}</p>`);
    cardBody.append(`<p class="card-text">Publicado por: ${heroData.biography.publisher}</p>`);
    cardBody.append(`<p class="card-text">Ocupación: ${heroData.work.occupation}</p>`);
    cardBody.append(`<p class="card-text">Primera Aparición: ${heroData.biography["first-appearance"]}</p>`);
    cardBody.append(`<p class="card-text">Altura: ${heroData.appearance.height[0]} - ${heroData.appearance.height[1]}</p>`);
    cardBody.append(`<p class="card-text">Peso: ${heroData.appearance.weight[0]} - ${heroData.appearance.weight[1]}</p>`);

    // Creo un parrafo para las alianzas
    const alianzas = heroData.biography.aliases;
    if (alianzas) {
        const alianzasP = $('<p>').addClass('card-text').text(`Alianzas: ${alianzas}`);
        cardBody.append(alianzasP);
    }

    // Agrego la imagen del héroe
    const heroImage = $('<img>').addClass('img-fluid rounded').attr('src', heroData.image.url).attr('alt', heroData.name);
    const imageContainer = card.find('.imagen');
    imageContainer.empty(); // Limpiamos cualquier contenido previo en la columna de la imagen
    imageContainer.append(heroImage);

});