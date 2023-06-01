const functions = require("./funciones");

test("Deberas retornar un arreglo que empiece en 1 y acabe en n", () => {
    const r1 = [1, 2, 3, 4, 5, 6, 7];
    const r2 = [1, 2, 3, 4, 5, 6, 7, 8];
    const r3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(functions.fillArray(7)).toEqual(r1);
    expect(functions.fillArray(8)).toEqual(r2);
    expect(functions.fillArray(9)).toEqual(r3);
});

test("Deberas retornar un array que comience en start y termine en end", () => {
    const r1 = [4, 5, 6, 7];
    const r2 = [2, 3, 4, 5, 6, 7, 8];
    const r3 = [6, 7, 8, 9];
    expect(functions.arrayRangeNumbers(4, 7)).toEqual(r1);
    expect(functions.arrayRangeNumbers(2, 8)).toEqual(r2);
    expect(functions.arrayRangeNumbers(6, 9)).toEqual(r3);
});

test("Retornar la suma de un arreglo de N cantidad de elementos", () => {
    const r1 = [4, 5, 6, 7];
    const r2 = [2, 3, 4, 5, 6, 7, 8];
    const r3 = [6, 7, 8, 9];
    expect(functions.sumOfNumbers(r1)).toEqual(22);
    expect(functions.sumOfNumbers(r2)).toEqual(35);
    expect(functions.sumOfNumbers(r3)).toEqual(30);
});

test("Retornar el numero mayor y menor de una arreglo de N elementos", () => {
    const r1 = [4, 5, 6, 7];
    const r2 = [2, 3, 4, 5, 6, 7, 8, 1];
    const r3 = [6, 7, 8, 9, 3, 100, 2, 1];
    expect(functions.greaterAndLesserNumber(r1)).toEqual([4, 7]);
    expect(functions.greaterAndLesserNumber(r2)).toEqual([1, 8]);
    expect(functions.greaterAndLesserNumber(r3)).toEqual([1, 100]);
});

test("Retornar un string con una estructura peculiar v1", () => {
    expect(functions.strangerPatterv1("blue")).toEqual("b0l1u2e3");
    expect(functions.strangerPatterv1("red")).toEqual("r0e1d2");
    expect(functions.strangerPatterv1("js")).toEqual("j0s1");
});

test("Retornar un string con una estructura peculiar v2", () => {
    expect(functions.strangerPatterv2("blue", 8765)).toEqual("b8l7u6e5");
    expect(functions.strangerPatterv2("red", 473)).toEqual("r4e7d3");
    expect(functions.strangerPatterv2("js", 11)).toEqual("j1s1");
});
