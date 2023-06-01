const functions = require("./funciones.js");
const data = require("./data.js");

test("1. retornar un arreglo con todos los nombre de los usuarios", () => {
    expect(functions.onlyNames(data.users1)).toEqual([
        "Brayan",
        "Stiven",
        "Sara",
        "pepe",
        "Daniela",
    ]);
    expect(functions.onlyNames(data.users2)).toEqual([
        "Pedro",
        "Julio",
        "Erik",
        "Jesus",
        "Mariana",
    ]);
    expect(functions.onlyNames(data.users3)).toEqual([
        "Andres",
        "Bairon",
        "Camilo",
        "Danilo",
        "Esmeralda",
    ]);
});

test("2. retornar la suma de las edades de todos los usuarios", () => {
    expect(functions.sumOfAgesFromUsers(data.users1)).toEqual(155);
    expect(functions.sumOfAgesFromUsers(data.users2)).toEqual(150);
    expect(functions.sumOfAgesFromUsers(data.users3)).toEqual(135);
});

test("3. retornar un arreglo de objetos con el nombre y el correo de todos los usuarios", () => {
    expect(functions.formatUsers(data.users1)).toEqual(data.result31);
    expect(functions.formatUsers(data.users2)).toEqual(data.result32);
    expect(functions.formatUsers(data.users3)).toEqual(data.result33);
});

test("4. retornar un arreglo de objetos con el nombre y el correo de todas las mujeres", () => {
    expect(functions.formatUsersOnlyWomen(data.users1)).toEqual([
        { nombre: "Sara", correo: "Sara@hotmail.com" },
        { nombre: "Daniela", correo: "Daniela@uaq.mx" },
    ]);
    expect(functions.formatUsersOnlyWomen(data.users2)).toEqual([
        { nombre: "Mariana", correo: "Mariana@uaq.mx" },
    ]);
    expect(functions.formatUsersOnlyWomen(data.users3)).toEqual([
        {
            nombre: "Esmeralda",
            correo: "Esmeralda@academlo.com",
        },
    ]);
});

test("5. retornar un arreglo de objetos con el nombre y la url de facebook de cada usuario", () => {
    expect(functions.urlsFacebook(data.users1)).toEqual(data.result51);
    expect(functions.urlsFacebook(data.users2)).toEqual(data.result52);
    expect(functions.urlsFacebook(data.users3)).toEqual(data.result53);
});
