import {Serie} from "./serie.js";
import {dataSeries} from "./dataSeries.js";


let serieTable: HTMLElement = document.getElementById('serie')!;
const totalTempElm: HTMLElement = document.getElementById("total-Temporadas")!;
agregarSeriesInTable(dataSeries);
totalTempElm.innerHTML = `${getTotalTemporadas(dataSeries)}`

let contentSerie: HTMLElement = document.getElementById('contentSerie')!;

serieTable.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("nombreSerie")) {
        let nombreSerie: string = target.textContent!;
        console.log(nombreSerie);
        clearCards();
        agregarCardSerie(findSerieByName(dataSeries,nombreSerie));
    }
});
function clearCards() {
    while (contentSerie.hasChildNodes()) {
        if (contentSerie.firstChild != null) {
            contentSerie.removeChild(contentSerie.firstChild);
        }
    }
}

function findSerieByName(series: Serie[], nombre: string){
    let i: number = 0;
    let go: boolean = true;
    
    while (go && i<series.length){
        if (series[i].nombre === nombre){
            go = false;
            return series[i];
        }
        i++;
    }
    return series[0];
}

function agregarCardSerie(serie: Serie){
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

    const seriesImage = document.getElementById("series-image") as HTMLImageElement;
    seriesImage.src = serie.foto;

    document.getElementById("nombre")!.textContent = serie.nombre;
    document.getElementById("description")!.textContent = serie.descripcion;
    
    const linkElement = document.getElementById("contentSerie") as HTMLAnchorElement;
    linkElement.href = serie.dir;
    linkElement.textContent = "Visita la página";
}

function agregarSeriesInTable(serie: Serie[]):void{
    console.log("Cargando series");
    serie.forEach((serie)=>{
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td><a href="#" class="nombreSerie">${serie.nombre}</a></td>
        <td>${serie.plataforma}</td>
        <td>${serie.temporada}</td>`;
        serieTable.appendChild(trElement);

    });
}

function getTotalTemporadas(serie: Serie[]): number{
    let totalTemporadas: number =0;
    serie.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporada);
    return totalTemporadas; 
}
