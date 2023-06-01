const functions = require("./ejerciciosConStrings");

test("Deberá contar y retornar los caracteres de una palabra", () => {
    expect(functions.contarCaracteres("Brayan")).toBe(6);
    expect(functions.contarCaracteres("Academlo")).toBe(8);
    expect(functions.contarCaracteres("Fundamentos de programacion")).toBe(27);
});

test("Deberá retornar true o false si la palbra esta en la frase", () => {
    expect(
        functions.fraseContienePalabra("Hola mi nombre es brayan", "brayan")
    ).toBe(true);
    expect(
        functions.fraseContienePalabra("Hola mi nombre es brayan", "Brayan")
    ).toBe(false);
    expect(
        functions.fraseContienePalabra("Fundamentos de programacion", "DE")
    ).toBe(false);
});

test("Deberá retornar la longitud de la última palabra de una frase.", () => {
    expect(functions.longitudUltimaPalabra("Hola mi nombre es brayan")).toBe(6);
    expect(functions.longitudUltimaPalabra("Hola mi nombre es ana")).toBe(3);
    expect(functions.longitudUltimaPalabra("Fundamentos de programacion")).toBe(
        12
    );
});

test("Deberá retornar una frase con la ultima palabra en mayuscula", () => {
    expect(functions.ultimaPalabraMayuscula("Hola mi nombre es brayan")).toBe(
        "Hola mi nombre es BRAYAN"
    );
    expect(functions.ultimaPalabraMayuscula("Hola mi nombre es ana")).toBe(
        "Hola mi nombre es ANA"
    );
    expect(
        functions.ultimaPalabraMayuscula("Fundamentos de programacion")
    ).toBe("Fundamentos de PROGRAMACION");
});

test("Deberá retornar la suma de las edades", () => {
    const f11 = "Hola tengo 10 años";
    const f12 = "Hola tengo 10 años";
    const f13 = "Hola tengo 10 años";

    const f21 = "Hola tengo 20 años";
    const f22 = "Hola tengo 20 años";
    const f23 = "Hola tengo 20 años";

    const f31 = "Hola tengo 30 años";
    const f32 = "Hola tengo 30 años";
    const f33 = "Hola tengo 30 años";

    expect(functions.sumarEdades(f11, f12, f13)).toBe(30);
    expect(functions.sumarEdades(f21, f22, f23)).toBe(60);
    expect(functions.sumarEdades(f31, f32, f33)).toBe(90);
});

test("Deberá retornar la cadena repetida n veces siendo n el número recibido.", () => {
    expect(functions.repetirCadena("brayan ", 2)).toBe("brayan brayan ");
    expect(functions.repetirCadena("academlo", 3)).toBe(
        "academloacademloacademlo"
    );
    expect(functions.repetirCadena("gatico ", 4)).toBe(
        "gatico gatico gatico gatico "
    );
});

test("Deberá retornar la cadena repetida n veces siendo n el número recibido.", () => {
    expect(functions.arrayDeMinisculas("Academlo Es Lo Mejor")).toEqual([
        "academlo",
        "es",
        "lo",
        "mejor",
    ]);
    expect(functions.arrayDeMinisculas("JavascripT I Love You")).toEqual([
        "javascript",
        "i",
        "love",
        "you",
    ]);
    expect(
        functions.arrayDeMinisculas("eL INICIO DE UNA GRAN HISTORIA")
    ).toEqual(["el", "inicio", "de", "una", "gran", "historia"]);
});
