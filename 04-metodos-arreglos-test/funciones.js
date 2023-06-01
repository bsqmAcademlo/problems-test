{
    // ! Ejercicio 1
    //
    // ? Retorna una palabra en camelCase
    //
    // todo: Entrada => "Mi palabra en camelCase" - Salida => "miPalabraEnCamelcase"
    // todo: Entrada => "Hola mi nombre es brayan" - Salida => "holaMiNombreEsBrayan"
    // todo: Entrada => "Javascript es lo mejor" - Salida => "javascriptEsLoMejor"
    //
    function camelCaseStr(str) {
        return;
    }
}

{
    // ! Ejercicio 2
    //
    // ? Retorna un array ordenado de mayor a menor las edades de un arreglo de personas.
    //
    // Todo: Ejemplo 1
    {
        // todo: Entrada =>
        /* 
        [
            { name: "Wladimir", age: 1 },
            { name: "Pablo", age: 29 },
            { name: "Andres", age: 55 },
            { name: "Carlos", age: 2 },
            { name: "Juan", age: 13 },
        ]; 
    */
        // todo: Salida =>
        /* 
        [
            { name: "Wladimir", age: 1 },
            { name: "Carlos", age: 2 },
            { name: "Juan", age: 13 },
            { name: "Pablo", age: 29 },
            { name: "Andres", age: 55 },
        ]; 
    */
    }
    // Todo: Ejemplo 2
    {
        // todo: Entrada =>
        /* 
            [
                { name: "Wladimir", age: 10 },
                { name: "Pablo", age: 290 },
                { name: "Andres", age: 55 },
                { name: "Carlos", age: 20 },
                { name: "Juan", age: 13 },
            ]; 
        */
        // todo: Salida =>
        /* 
            [
                { name: "Wladimir", age: 10 },
                { name: "Juan", age: 13 },
                { name: "Carlos", age: 20 },
                { name: "Andres", age: 55 },
                { name: "Pablo", age: 290 },
            ]; 
        */
    }
    //
    function sortForAge(arr) {
        return;
    }
}

{
    // ! Ejercicio 3
    //
    // ? Retorna un array ordenado alfabeticamente un arreglo de personas.
    //
    // Todo: ejemplo 1
    {
        {
            // todo: Entrada =>
            /* 
                [
                    { name: "Wladimir", age: 1 },
                    { name: "Pablo", age: 29 },
                    { name: "Andres", age: 55 },
                    { name: "Carlos", age: 2 },
                    { name: "Juan", age: 13 },
                ]; 
            */
            // todo: Salida =>
            /* 
                [
                    { name: "Andres", age: 55 },
                    { name: "Carlos", age: 2 },
                    { name: "Juan", age: 13 },
                    { name: "Pablo", age: 29 },
                    { name: "Wladimir", age: 1 },
                ]; 
            */
        }
    }
    // Todo: ejemplo 2
    {
        {
            // todo: Entrada =>
            /* 
                [
                    { name: "Carlos", age: 1 },
                    { name: "Brayan", age: 29 },
                    { name: "Zara", age: 55 },
                    { name: "Daniel", age: 2 },
                    { name: "Andres", age: 13 },
                ]; 
            */
            // todo: Salida =>
            /* 
                [
                    { name: "Andres", age: 55 },
                    { name: "Brayan", age: 2 },
                    { name: "Carlos", age: 13 },
                    { name: "Daniel", age: 29 },
                    { name: "Zara", age: 1 },
                ]; 
            */
        }
    }
    //
    function sortForName(arr) {
        return;
    }
}

{
    // ! Ejercicio 4
    //
    // ? Retorna un arreglo sin nombres repetidos
    //
    // Todo: ejemplo 1
    {
        {
            // todo: Entrada =>
            /* 
                ["brayan", "stiven", "pedro", "brayan", "pedro"]; 
            */
            // todo: Salida =>
            /* 
                ["brayan", "stiven", "pedro"]; 
            */
        }
    }
    // Todo: ejemplo 2
    {
        {
            // todo: Entrada =>
            /* 
                ["pablo", "andres", "carlos", "juan", "juan", "andres"]; 
            */
            // todo: Salida =>
            /* 
                ["pablo", "andres", "carlos", "juan"]; 
            */
        }
    }
    //
    function namesUniqueV1(names) {
        return;
    }
}

{
    // ! Ejercicio 5
    //
    // ? Retorna un arreglo con los nombres que no tienen mas coincidencias
    //
    // Todo: ejemplo 1
    {
        {
            // todo: Entrada =>
            /* 
                ["brayan", "stiven", "pedro", "brayan", "pedro"]; 
            */
            // todo: Salida =>
            /* 
                ["stiven"]; 
            */
        }
    }
    // Todo: ejemplo 2
    {
        {
            // todo: Entrada =>
            /* 
                ["pablo", "andres", "carlos", "juan", "juan", "andres"]; 
            */
            // todo: Salida =>
            /* 
                ["pablo", "carlos"]; 
            */
        }
    }
    //
    function namesUniqueV2(names) {
        return;
    }
}

{
    // ! ejercicio 6
    //
    // ? Retorna la mitad de un arreglo de numeros
    //
    // todo: Entrada => [1,2,3] - Salida => 2
    // todo: Entrada => [1,2,3,4] - Salida => [2,3]
    // todo: Entrada => [10,20,30,40,50] - Salida => 30
    // todo: Entrada => [10,20,30,40,50,60] - Salida => [30,40]
    //
    function halfArray(numbers) {
        return;
    }
}

module.exports = {
    camelCaseStr,
    halfArray,
    namesUniqueV1,
    namesUniqueV2,
    sortForAge,
    sortForName,
};
