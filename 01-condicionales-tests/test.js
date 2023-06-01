const functions = require("./funciones.js");

test("Retornar el tipo de pizzay el valor de esta", () => {
    expect(functions.pizzaShop("pequeña")).toEqual("pequeña: $10");
    expect(functions.pizzaShop("mediana")).toEqual("mediana: $15");
    expect(functions.pizzaShop("grande")).toEqual("grande: $20");
    expect(functions.pizzaShop("familiar")).toEqual("familiar: $25");
    expect(functions.pizzaShop("super grande")).toEqual("no está disponible");
});

test("Retornar un string dependiendo la hora en que se salude", () => {
    expect(functions.hourlyGreeting(5)).toEqual("Deberias estar durmiendo");
    expect(functions.hourlyGreeting(11)).toEqual("Buenos días");
    expect(functions.hourlyGreeting(18)).toEqual("Buenas tardes");
    expect(functions.hourlyGreeting(24)).toEqual("Buenas noches");
    expect(functions.hourlyGreeting(0)).toEqual("Hora no soportada");
});

test("Retornar una estacion segun el mes", () => {
    expect(functions.season("marzo")).toEqual("Invierno");
    expect(functions.season("junio")).toEqual("Primavera");
    expect(functions.season("septiembre")).toEqual("Verano");
    expect(functions.season("diciembre")).toEqual("Otoño");
    expect(functions.season("naruto")).toEqual("Mes no válido");
});

test("Retornar true si el numero es par o false sino lo es", () => {
    expect(functions.evenNumber(1)).toEqual(false);
    expect(functions.evenNumber(2)).toEqual(true);
    expect(functions.evenNumber(3)).toEqual(false);
    expect(functions.evenNumber(4)).toEqual(true);
    expect(functions.evenNumber(5)).toEqual(false);
});

test("Retornar el doble de un numero si es menor a 10, sino, el mismo numero", () => {
    expect(functions.dobleNumberOrNumber(5)).toEqual(10);
    expect(functions.dobleNumberOrNumber(9)).toEqual(18);
    expect(functions.dobleNumberOrNumber(20)).toEqual(20);
    expect(functions.dobleNumberOrNumber(1)).toEqual(2);
    expect(functions.dobleNumberOrNumber(15)).toEqual(15);
});
