export class View {
    constructor(presenter) {
        // HTML-Elemente holen
        this.ausgabe = document.getElementById('gedicht');
        this.eingabe = document.getElementById('eingabe');
        const buttonVorne = document.getElementById('vorne');
        const buttonHinten = document.getElementById('hinten');
        const buttonLoeschen = document.getElementById('loeschen');
        const buttonDuplizieren = document.getElementById('duplizieren');

        // Events
        buttonVorne.addEventListener('click', function () {
            presenter.buttonVorneClicked();
        });

        buttonHinten.addEventListener('click', function () {
            presenter.buttonHintenClicked();
        });

        buttonLoeschen.addEventListener('click', function () {
            presenter.buttonLoeschenClicked();
        });

        buttonDuplizieren.addEventListener('click', function () {
            presenter.buttonDuplizierenClicked();
        });
    }

    getInputText() {
        return this.eingabe.value;
    }

    setOutput(htmlText) {
        this.ausgabe.innerHTML = htmlText;
    }
}