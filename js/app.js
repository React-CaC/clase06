/// Importar funciones o clases
import Button from "./components/button.js"
import Input from "./components/input.js"
import Video from "./components/video.js"
import datos from "./datos/datos.js";

const mySuperArrayIfStrings = datos.mySuperArrayIfStrings;
const arrayDeInputs = datos.arrayDeInputs;
const nuevoArray = datos.nuevoArray;
//// Funciones
function RenderButton(text) {
    let myButton = new Button('app', text);
    myButton.render();
}


/// Logica de App
mySuperArrayIfStrings.forEach(element => RenderButton(element))

nuevoArray.forEach((element) => {
    let input = new Input("app", element)
    input.render()
})

const miVideo = new Video("../assets/video/movie.mp4", 500, 300)
miVideo.render()