import { Model } from './model.js';
import { View } from './view.js';

export class Presenter {
    constructor() {
        this.model = new Model();
        this.view = new View(this);
    }

    buttonVorneClicked() {
        console.log('vorne angeklickt');
    }

    buttonHintenClicked() {
        console.log('hinten angeklickt');
    }

    buttonLoeschenClicked() {
        console.log('loeschen angeklickt');
    }

    buttonDuplizierenClicked() {
        console.log('duplizieren angeklickt');
    }
}