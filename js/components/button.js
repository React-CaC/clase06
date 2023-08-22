export default class Button {
    constructor(parentID, text) {
        this.parentID = parentID
        // completa this.text
        this.text = text
    }

    render() {
        let myApp = document.getElementById(this.parentID)
        const button = myApp.innerHTML + "<button>" + this.text + "</button>"
        myApp.innerHTML = button // Vamos a escribir el html para 
        //que se dibuje un boton con el texto de this.texto
    }
}