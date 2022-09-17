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
    } else if (estado == 'flex'){
        contenedorImg.style.display = 'none';
    }
}

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

    } else if (estadoCuadrado == 'flex'){
        contenedorCuadrado.style.display = 'none';
    }

    cuadradoSet();
}