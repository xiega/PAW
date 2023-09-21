const readline = require('readline-sync');

function pole(dlugosc, szerokosc) {
    return dlugosc * szerokosc;
}

function obwod(dlugosc, szerokosc) {
    return dlugosc + dlugosc + szerokosc + szerokosc;
}

function get() {
    const dlugosc = parseFloat(readline.question('Podaj długość prostokąta: '));
    const szerokosc = parseFloat(readline.question('Podaj szerokość prostokąta: '));
    return { dlugosc, szerokosc };
}

function main() {
    const { dlugosc, szerokosc } = get();

    if (isNaN(dlugosc) || isNaN(szerokosc) || dlugosc <= 0 || szerokosc <= 0) {
        console.log('Błędne dane.');
        return;
    }

    const Pole = pole(dlugosc, szerokosc);
    const Obwod = obwod(dlugosc, szerokosc);
    console.log('Obwód prostokąta:', Obwod);
    console.log('Pole prostokąta:', Pole);
}
main();
