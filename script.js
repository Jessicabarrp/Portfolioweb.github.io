// Esperar a que la página esté completamente cargada
window.addEventListener('load', function() {
    // Agregar la clase 'loaded' al cuerpo una vez que la página esté completamente cargada
    document.body.classList.add('loaded');
});

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

const emojis = ["👩🏻‍💻","🖌️", "🚀", "💻", "🌐"]; // Lista de emojis que quieres que cambien
const emojiSpan = document.getElementById("emoji");

let index = 0;

function changeEmoji() {
    emojiSpan.textContent = emojis[index];
    index = (index + 1) % emojis.length; // Avanzamos al siguiente emoji y volvemos al principio si llegamos al final de la lista
}

setInterval(changeEmoji, 1000); // Cambiar el emoji cada segundo (1000 milisegundos)
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("microsoft");
        habilidades[6].classList.add("ingles");
        habilidades[7].classList.add("adaptabilidad");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo_en_equipo");
        habilidades[10].classList.add("creatividad_e_innovacion");
        habilidades[11].classList.add("aprendizaje");
        habilidades[12].classList.add("resiliencia");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 