import { dataSeries } from "./dataSeries.js";
var serieTable = document.getElementById('serie');
var totalTempElm = document.getElementById("total-Temporadas");
agregarSeriesInTable(dataSeries);
totalTempElm.innerHTML = "".concat(getTotalTemporadas(dataSeries));
var contentSerie = document.getElementById('contentSerie');
serieTable.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("nombreSerie")) {
        var nombreSerie = target.textContent;
        console.log(nombreSerie);
        clearCards();
        agregarCardSerie(findSerieByName(dataSeries, nombreSerie));
    }
});
function clearCards() {
    while (contentSerie.hasChildNodes()) {
        if (contentSerie.firstChild != null) {
            contentSerie.removeChild(contentSerie.firstChild);
        }
    }
}
function findSerieByName(series, nombre) {
    var i = 0;
    var go = true;
    while (go && i < series.length) {
        if (series[i].nombre === nombre) {
            go = false;
            return series[i];
        }
        i++;
    }
    return series[0];
}
function agregarCardSerie(serie) {
    // let divElement = document.createElement('div');
    // divElement.setAttribute('class', 'card');
    // divElement.setAttribute('style', 'width: 20rem;');
    // divElement.innerHTML = `
    //     <img src="./imagenes/${serie.foto}" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">${serie.nombre}</h5>
    //         <p class="card-text">${serie.descripcion}</p>
    //         <a href="${serie.dir}" class="btn btn-dark">Resultado...</a>
    //     </div>
    // `
    // contentSerie.appendChild(divElement);
    // document.getElementById("series-image")!.setAttribute("src", serie.foto);
    // document.getElementById("nombre")!.textContent = serie.nombre;
    // document.getElementById("description")!.textContent = serie.descripcion;
    // document.getElementById("contentSerie")!.setAttribute("href", serie.dir);
    var seriesImage = document.getElementById("series-image");
    seriesImage.src = serie.foto;
    document.getElementById("nombre").textContent = serie.nombre;
    document.getElementById("description").textContent = serie.descripcion;
    var linkElement = document.getElementById("contentSerie");
    linkElement.href = serie.dir;
    linkElement.textContent = "Visita la página";
}
function agregarSeriesInTable(serie) {
    console.log("Cargando series");
    serie.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td><a href=\"#\" class=\"nombreSerie\">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.plataforma, "</td>\n        <td>").concat(serie.temporada, "</td>");
        serieTable.appendChild(trElement);
    });
}
function getTotalTemporadas(serie) {
    var totalTemporadas = 0;
    serie.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporada; });
    return totalTemporadas;
}
