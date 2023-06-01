const functions = require("./funciones.js");

test("1. Retorna una palabra en camelCase", () => {
    expect(functions.camelCaseStr("HOLA SOY NARUTO")).toEqual("holaSoyNaruto");
    expect(functions.camelCaseStr("mi nombre es")).toEqual("miNombreEs");
    expect(functions.camelCaseStr("QuE MaS PueS")).toEqual("queMasPues");
    expect(functions.camelCaseStr("Aprendiendo javaScript")).toEqual(
        "aprendiendoJavascript"
    );
});

test("2. Retorna un array ordenado de mayor a menor las edades de un arreglo de personas.", () => {
    const input1 = [
        { name: "Wladimir", age: 1 },
        { name: "Pablo", age: 29 },
        { name: "Andres", age: 55 },
        { name: "Carlos", age: 2 },
        { name: "Juan", age: 13 },
    ];

    const input2 = [
        { name: "Wladimir", age: 99 },
        { name: "Pablo", age: 40 },
        { name: "Andres", age: 10 },
        { name: "Carlos", age: 9 },
        { name: "Juan", age: 13 },
    ];

    const input3 = [
        { name: "Wladimir", age: 55 },
        { name: "Pablo", age: 29 },
        { name: "Andres", age: 21 },
        { name: "Carlos", age: 2 },
        { name: "Juan", age: 1 },
    ];

    const output1 = [
        { name: "Wladimir", age: 1 },
        { name: "Carlos", age: 2 },
        { name: "Juan", age: 13 },
        { name: "Pablo", age: 29 },
        { name: "Andres", age: 55 },
    ];

    const output2 = [
        { name: "Carlos", age: 9 },
        { name: "Andres", age: 10 },
        { name: "Juan", age: 13 },
        { name: "Pablo", age: 40 },
        { name: "Wladimir", age: 99 },
    ];

    const output3 = [
        { name: "Juan", age: 1 },
        { name: "Carlos", age: 2 },
        { name: "Andres", age: 21 },
        { name: "Pablo", age: 29 },
        { name: "Wladimir", age: 55 },
    ];
    expect(functions.sortForAge(input1)).toEqual(output1);
    expect(functions.sortForAge(input2)).toEqual(output2);
    expect(functions.sortForAge(input3)).toEqual(output3);
});

test("3. Retorna un array ordenado alfabeticamente un arreglo de personas.", () => {
    const input1 = [
        { name: "Wladimir", age: 1 },
        { name: "Pablo", age: 29 },
        { name: "Andres", age: 55 },
        { name: "Carlos", age: 2 },
        { name: "Juan", age: 13 },
    ];

    const input2 = [
        { name: "Pedro", age: 99 },
        { name: "Brayan", age: 40 },
        { name: "Dora", age: 10 },
        { name: "Camilo", age: 9 },
        { name: "Alba", age: 13 },
    ];

    const input3 = [
        { name: "Juan", age: 1 },
        { name: "Daniel", age: 55 },
        { name: "Pablo", age: 29 },
        { name: "Estefania", age: 21 },
        { name: "Estiven", age: 2 },
    ];

    const output1 = [
        { name: "Andres", age: 55 },
        { name: "Carlos", age: 2 },
        { name: "Juan", age: 13 },
        { name: "Pablo", age: 29 },
        { name: "Wladimir", age: 1 },
    ];

    const output2 = [
        { name: "Alba", age: 13 },
        { name: "Brayan", age: 40 },
        { name: "Camilo", age: 9 },
        { name: "Dora", age: 10 },
        { name: "Pedro", age: 99 },
    ];

    const output3 = [
        { name: "Daniel", age: 55 },
        { name: "Estefania", age: 21 },
        { name: "Estiven", age: 2 },
        { name: "Juan", age: 1 },
        { name: "Pablo", age: 29 },
    ];

    expect(functions.sortForName(input1)).toEqual(output1);
    expect(functions.sortForName(input2)).toEqual(output2);
    expect(functions.sortForName(input3)).toEqual(output3);
});

test("4. Retorna un arreglo sin nombres repetidos", () => {
    const input1 = ["brayan", "sara", "pedro", "julian", "pablo", "pablo"];
    const input2 = [
        "brayan",
        "sara",
        "sofia",
        "julian",
        "pablo",
        "pablo",
        "sofia",
    ];
    const input3 = ["brayan", "pablo", "pablo", "julian", "pedro"];

    const output1 = ["brayan", "sara", "pedro", "julian", "pablo"];
    const output2 = ["brayan", "sara", "sofia", "julian", "pablo"];
    const output3 = ["brayan", "pablo", "julian", "pedro"];

    expect(functions.namesUniqueV1(input1)).toEqual(output1);
    expect(functions.namesUniqueV1(input2)).toEqual(output2);
    expect(functions.namesUniqueV1(input3)).toEqual(output3);
});

test("5. Retorna un arreglo con los nombres que no tienen mas coincidencias", () => {
    const input1 = ["brayan", "sara", "pedro", "julian", "pablo", "pablo"];
    const input2 = [
        "brayan",
        "sara",
        "sofia",
        "julian",
        "pablo",
        "pablo",
        "sofia",
    ];
    const input3 = ["brayan", "pablo", "pablo", "julian", "pedro", "julian"];

    const output1 = ["brayan", "sara", "pedro", "julian"];
    const output2 = ["brayan", "sara", "julian"];
    const output3 = ["brayan", "pedro"];

    expect(functions.namesUniqueV2(input1)).toEqual(output1);
    expect(functions.namesUniqueV2(input2)).toEqual(output2);
    expect(functions.namesUniqueV2(input3)).toEqual(output3);
});

test("6. Retorna la mitad de un arreglo de numeros", () => {
    expect(functions.halfArray([1, 5, 3])).toEqual(5);
    expect(functions.halfArray([1, 100, 200, 4])).toEqual([100, 200]);
    expect(functions.halfArray([10, 20, 1, 40, 50])).toEqual(1);
    expect(functions.halfArray([10, 20, 22, 23, 50, 60])).toEqual([22, 23]);
});
