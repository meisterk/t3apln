export class View {
    constructor(presenter) {
        // HTML-Elemente holen
        this.ausgabe = document.getElementById('gedicht');
        this.eingabe = document.getElementById('eingabe');
        this.buttonVorne = document.getElementById('vorne');
        this.buttonHinten = document.getElementById('hinten');
        this.buttonLoeschen = document.getElementById('loeschen');
        this.buttonDuplizieren = document.getElementById('duplizieren');

        this.delegateEvents(presenter);
    }

    delegateEvents(presenter) {
        this.buttonVorne.addEventListener('click', function () {
            presenter.buttonVorneClicked();
        });

        this.buttonHinten.addEventListener('click', function () {
            presenter.buttonHintenClicked();
        });

        this.buttonLoeschen.addEventListener('click', function () {
            presenter.buttonLoeschenClicked();
        });

        this.buttonDuplizieren.addEventListener('click', function () {
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