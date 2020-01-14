export class Model {
    constructor() {
        this.gedicht = 'Hallo';
    }

    getGedicht() {
        return this.gedicht;
    }

    vorneEinfuegen(text) {
        this.gedicht = text + '<br>' + this.gedicht;
    }

    hintenAnhaengen(text) {
        this.gedicht = this.gedicht + '<br>' + text;
    }

    loeschen() {
        this.gedicht = '';
    }

    duplizieren() {
        this.gedicht = this.gedicht + this.gedicht;
    }

}