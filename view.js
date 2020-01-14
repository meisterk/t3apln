export class View {
    constructor(presenter) {
        // HTML-Elemente holen
        const ausgabe = document.getElementById('gedicht');
        const eingabe = document.getElementById('eingabe');
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
}