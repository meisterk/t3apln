import { Model } from './model.js';
import { View } from './view.js';

export class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View(this);
    }

    buttonVorneClicked() {
        const neueZeile = this.view.getInputText();
        this.model.vorneEinfuegen(neueZeile);
        this.update();
    }

    update() {
        const neuesGedicht = this.model.getGedicht();
        this.view.setOutput(neuesGedicht);
    }

    buttonHintenClicked() {
        const neueZeile = this.view.getInputText();
        this.model.hintenAnhaengen(neueZeile);
        this.update();
    }

    buttonLoeschenClicked() {
        this.model.loeschen();
        this.update();
    }

    buttonDuplizierenClicked() {
        this.model.duplizieren();
        this.update();
    }
}