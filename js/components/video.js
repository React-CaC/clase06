export default class Video{
    constructor(url, ancho, alto){
        this.url = url;
        this.ancho = ancho;
        this.alto = alto;
    }

    render(){
        const myApp = document.querySelector('#app')

        myApp.innerHTML += `<video width="${this.ancho}" height="${this.alto}" controls>
                                <source src="${this.url}" type="video/mp4">
                            </video>`
    }
}