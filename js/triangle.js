/*var a = prompt('Podaj długość podstawy trójkąta a:'),
    h = prompt('Podaj wysokość trójkąta h:'),
    triangleArea;

triangleArea = a * h / 2;

alert('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi ' + triangleArea + ' jednostek kwadratowych.');
console.log('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi ' + triangleArea + ' jednostek kwadratowych.');*/

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        return 'Błąd! Nieprawidłowe dane wejściowe - a <= 0 || h <= 0';
    } else {
        return (a * h / 2);
    }
}

function info(a, h, area) {
    return 'Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi: ' + area + '.';
}

var A = 10,
    H = 6;
console.log(info(A, H, getTriangleArea(A, H)));

A = 5;
H = 5;
    
var triangleArea;
triangleArea = getTriangleArea(A, H);
console.log(info(A, H, triangleArea));

A = 7;
H = 15;
triangleArea = getTriangleArea(A, H);
console.log(info(A, H, triangleArea));

A = -2;
H = 3;
triangleArea = getTriangleArea(A, H);
console.log(info(A, H, triangleArea));