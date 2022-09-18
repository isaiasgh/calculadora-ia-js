const body = document.querySelector('body');
const boton = document.querySelector('.boton')
const botonGeometria = document.querySelector('#boton1');
const botonEstadistica = document.querySelector('#boton2');
const botonDescuentos = document.querySelector('#boton3');
const contenedorImg = document.querySelector('.contenedor-img');

const figuraCuadrado = document.querySelector('.cuadrado');
const figuraCirculo = document.querySelector('.circulo');
const figuraTriangulo = document.querySelector('.triangulo');

botonGeometria.addEventListener('click', geometriaCalculadora);

contenedorImg.style.display = 'none';

function geometriaCalculadora(){
    estado = contenedorImg.style.display;
    if (estado == 'none'){
        contenedorImg.style.display = 'flex';
        contenedorEstadistica.style.display = 'none';
        contenedorTriangulo.style.display = 'none';
        contenedorCuadrado.style.display = 'none';
        contenedorCirculo.style.display = 'none';
    } else if (estado == 'flex'){
        contenedorImg.style.display = 'none';
    }
}

// cuadrado
const inputCuadrado = document.querySelector('#ladoCuadrado');

const contenedorCuadrado = document.querySelector('.contenedorCuadrado');
contenedorCuadrado.style.display = 'none';

const botonCuadrado = document.querySelector('.buttonCuadrado');
botonCuadrado.addEventListener('click', cuadradoSet);

const perimetroText = document.querySelector('.perimetroText');
const areaText = document.querySelector('.areaText');

figuraCuadrado.addEventListener('click', CalcularCuadrado);

function cuadradoSet(){

    const ladoCuadrado = Number(inputCuadrado.value);
    
    const perimetroCuadrado = ladoCuadrado * 4;
    const areaCuadrado = ladoCuadrado ** 2;

    perimetroText.innerHTML = 'El perímetro de tu cuadrado mide: ' + perimetroCuadrado;
    areaText.innerHTML = 'El área de tu cuadrado mide: ' + areaCuadrado;

}  

function CalcularCuadrado(){
    estadoCuadrado = contenedorCuadrado.style.display;
    if (estadoCuadrado == 'none'){
        contenedorCuadrado.style.display = 'flex';
        contenedorTriangulo.style.display = 'none';
        contenedorCirculo.style.display = 'none';

    } else if (estadoCuadrado == 'flex'){
        contenedorCuadrado.style.display = 'none';
    }

    cuadradoSet();
}

// triangulo
const inputTriangulo1 = document.querySelector('#ladoTriangulo1');
const inputTriangulo2 = document.querySelector('#ladoTriangulo2');
const inputTriangulo3 = document.querySelector('#ladoTriangulo3');

const contenedorTriangulo = document.querySelector('.contenedorTriangulo');
contenedorTriangulo.style.display = 'none';

const botonTriangulo = document.querySelector('.buttonTriangulo');
botonTriangulo.addEventListener('click', trianguloSet); // creamos funcion

const TperimetroText = document.querySelector('.TperimetroText');
const TareaText = document.querySelector('.TareaText');

figuraTriangulo.addEventListener('click', CalcularTriangulo);

function trianguloSet(){

    const ladoTriangulo1 = Number(inputTriangulo1.value);
    const ladoTriangulo2 = Number(inputTriangulo2.value);
    const ladoTriangulo3 = Number(inputTriangulo3.value);
    
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
    const areaTriangulo = (ladoTriangulo3*ladoTriangulo1)/2;

    TperimetroText.innerHTML = 'El perímetro de tu Triangulo mide: ' + perimetroTriangulo;
    TareaText.innerHTML = 'El área de tu cuadrado mide: ' + areaTriangulo;
}

function CalcularTriangulo(){
    estadoTriangulo = contenedorTriangulo.style.display;
    if (estadoTriangulo == 'none'){
        contenedorTriangulo.style.display = 'flex';
        contenedorCuadrado.style.display = 'none';
        contenedorCirculo.style.display = 'none';

    } else if (estadoTriangulo == 'flex'){
        contenedorTriangulo.style.display = 'none';
    }

    trianguloSet();
}

// circulo
const inputCirculo = document.querySelector('#ladoCirculo');

const contenedorCirculo = document.querySelector('.contenedorCirculo');
contenedorCirculo.style.display = 'none';

const botonCirculo = document.querySelector('.buttonCirculo');
botonCirculo.addEventListener('click', circuloSet);

const CperimetroText = document.querySelector('.CperimetroText');
const CareaText = document.querySelector('.CareaText');

figuraCirculo.addEventListener('click', CalcularCirculo);

function circuloSet(){

    const radioCirculo = Number(inputCirculo.value);
    
    const perimetroCirculo = (2 * (Math.PI) * radioCirculo).toFixed(2);
    const areaCirculo = ((Math.PI * (radioCirculo**2))).toFixed(2);

    CperimetroText.innerHTML = 'El perímetro de tu Circulo mide: ' + perimetroCirculo;
    CareaText.innerHTML = 'El área de tu Circulo mide: ' + areaCirculo;

}  

function CalcularCirculo(){
    estadoCirculo = contenedorCirculo.style.display;
    if (estadoCirculo == 'none'){
        contenedorCirculo.style.display = 'flex';
        contenedorCuadrado.style.display = 'none';
        contenedorTriangulo.style.display = 'none';

    } else if (estadoCirculo == 'flex'){
        contenedorCirculo.style.display = 'none';
    }

    circuloSet();
}

// estadistica
const inputEstadistica = document.querySelector('#numLista');
const botonCalcularEstadistica = document.querySelector('.buttonEstadistica');
const divParaInputs = document.querySelector('.divdeinput');
const contenedorEstadistica = document.querySelector('.contenedor-estadistica');
botonEstadistica.addEventListener('click', estadisticaCalculadora);
botonCalcularEstadistica.addEventListener('click', calcularEstadistica);

contenedorEstadistica.style.display = 'none';

function estadisticaCalculadora(){
    estado = contenedorEstadistica.style.display;
    if (estado == 'none'){
        contenedorEstadistica.style.display = 'flex';
        contenedorImg.style.display = 'none';
    } else if (estado == 'flex'){
        contenedorEstadistica.style.display = 'none';
    }
}


const pInfoModa = document.createElement('p');
const pInfoMedia = document.createElement('p');
const pInfoMediana = document.createElement('p');

divParaInputs.appendChild(pInfoModa);
divParaInputs.appendChild(pInfoMedia);
divParaInputs.appendChild(pInfoMediana);

const listaPrueba = [2,3,4,5,5];

function calcularEstadistica(){
    const numInputsGen = Number(inputEstadistica.value);
    generarInputs(numInputsGen);
    const ListoBoton = document.querySelector('.botonParaCalcularStats');
    ListoBoton.addEventListener('click', calcularStatsFunction);
}

let Elementos = [];

function generarInputs(numInputsGen){

    let numeroElementosAntiguos = Elementos.length;

    if (numeroElementosAntiguos > 0){
        (eliminarElementos(numeroElementosAntiguos)); // eliminar inputs, en caso de que exista uno hecho previamente.
    }
    
    let i = 0;

    for(i; i < numInputsGen; i++){
        let nuevoInput = document.createElement('input');
        nuevoInput.setAttribute('id', 'inputNuevo' + i);
        nuevoInput.setAttribute('class', 'inputyesyes');
        divParaInputs.appendChild(nuevoInput);
        let nombreparaplaceholder = i + 1;
        nuevoInput.placeholder = 'Elemento ' + nombreparaplaceholder;
        

        Elementos.push(nuevoInput);
    }
}

function eliminarElementos(x){
    for(let i = 0; i < x; i++){ 
        let inputTemporal = 'inputNuevo' + i;
        let inputaEliminar = document.getElementById(inputTemporal);
        if(Elementos.length = 0){
            return;
        }
        let padre = inputaEliminar.parentNode;
        padre.removeChild(inputaEliminar);
    }
}

let ListaInputsInfo = [];

function calcularStatsFunction(){
    // hacer los calculos e imprimirlos
    pushElementosAuto();

    pInfoModa.innerHTML = 'Su moda es: ' + calcularModa(listaPrueba);
    pInfoMediana.innerHTML = 'Su media es: ' + calcularMediana(listaPrueba);
    pInfoMedia.innerHTML = 'Su mediana es: ' + calcularPromedio(listaPrueba);

}

function esPar(lista){
    return !(lista.length % 2);
}

function esImpar(lista){
    return(lista.length % 2);
}

function calcularModa(lista){
    const listaCount = {};

    for (let i = 0; i < lista.length; i++){
        const elemento = lista[i];
        if (listaCount[elemento]){
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length-1];
    const moda = listaMaxNumber[0];
    return moda;
}


function calcularPromedio(lista){
    const sumaLista = lista.reduce((a, b) => a+b);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length/2)-1;
        const indexMitad2ListaPar = (lista.length/2);
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        return(calcularPromedio(listaMitades));
    } else{
        const indexMitadListaImpar = Math.floor(lista.length/2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado - nuevoValor;
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

function ordenarListaBidimensional(listaDesordenada, i){    
    function ordenarListaSort(valorAcumulado, nuevoValor){
        return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

function pushElementosAuto(){
    let longitudInputs = Elementos.length;
    for(i=0 ; i < longitudInputs; i++){
        let index = Elementos[i].value;
        ListaInputsInfo.push(index);
        console.log(ListaInputsInfo);
    }
}

// hacer otra funcion que me vacie mi array;