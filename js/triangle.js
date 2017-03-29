/*var a = prompt('Podaj długość podstawy trójkąta a:'),
    h = prompt('Podaj wysokość trójkąta h:'),
    triangleArea;

triangleArea = a * h / 2;

alert('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi ' + triangleArea + ' jednostek kwadratowych.');
console.log('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi ' + triangleArea + ' jednostek kwadratowych.');*/

function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        console.log('Błąd! Nieprawidłowe dane wejściowe - a <= 0 || h <= 0');
    } else {
        console.log('Pole trójkąta o podstawie a = ' + a + ' i wysokości h = ' + h + ' wynosi: ' + (a * h / 2) + '.');
    }
}

getTriangleArea(10, 6);
getTriangleArea(5, 5);
getTriangleArea(7, 15);
getTriangleArea(-2, 3);