export default class Input {
    constructor(parentID, type) {
        this.parentID = parentID
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID)
        const input = myApp.innerHTML + "<input type=" + this.type + ">";
        myApp.innerHTML = input
    }
}