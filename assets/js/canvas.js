const heroData = JSON.parse(sessionStorage.getItem('heroData'));

console.log(heroData);
console.log(heroData.powerstats.combat);

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: `Estadisticas de Poder para ${heroData.name}`
        },
        legend: {
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                { y: heroData.powerstats.intelligence, name: "Intelligence", exploded: true },
                { y: heroData.powerstats.strength, name: "Strength", exploded: true },
                { y: heroData.powerstats.speed, name: "Speed", exploded: true },
                { y: heroData.powerstats.durability, name: "Durability", exploded: true },
                { y: heroData.powerstats.power, name: "Power", exploded: true },
                { y: heroData.powerstats.combat, name: "Combat", exploded: true },
            ]
        }]
    });

    chart.render();

}

function explodePie(e) {
    if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
}

