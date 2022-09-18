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



function calcularEstadistica(){
    const numInputsGen = Number(inputEstadistica.value);
    generarInputs(numInputsGen);

}

let Elementos = [];

function generarInputs(numInputsGen){

    let numeroElementosAntiguos = Elementos.length;

    if (numeroElementosAntiguos > 0){
        setTimeout(eliminarElementos(numeroElementosAntiguos), 1500);
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
    const imagen = document.getElementById('inputNuevo0');
    for(let i = 0; i < x; i++){ 
        let imagen2 = 'inputNuevo' + i;
        let imagen3 = document.getElementById(imagen2);
        if(Elementos.length = 0){
            return;
        }
        let padre = imagen3.parentNode;
        padre.removeChild(imagen3);
    }
}