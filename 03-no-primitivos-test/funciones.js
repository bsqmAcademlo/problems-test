// Todos los ejercicios tendran como base esta estructura
const users = [
    {
        nombre: "Erik",
        edad: 29,
        correo: "erik@academlo.com",
        social: [
            { nombre: "twitter", url: "twitter/erik" },
            { nombre: "facebook", url: "facebook/erik" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Georg",
        edad: 33,
        correo: "georg@academlo.com",
        social: [
            { nombre: "instagram", url: "instagram/georg" },
            { nombre: "twitter", url: "twitter/georg" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Andrea",
        edad: 42,
        correo: "andrea@hotmail.com",
        social: [
            { nombre: "twitter", url: "twitter/andrea" },
            { nombre: "youtube", url: "youtube/andrea" },
            { nombre: "facebook", url: "facebook/andrea" },
        ],
        genero: "Mujer",
    },
    {
        nombre: "Oscar",
        edad: 31,
        correo: "oscar@academlo.com",
        social: [
            { nombre: "youtube", url: "youtube/oscar" },
            { nombre: "twitter", url: "twiter/oscar" },
            { nombre: "facebook", url: "facebook/oscar" },
            { nombre: "instagram", url: "instagram/oscar" },
        ],
        genero: "Hombre",
    },
    {
        nombre: "Daniela",
        edad: 22,
        correo: "andrea@uaq.mx",
        social: [{ nombre: "twitter", url: "twitter/andrea" }],
        genero: "Mujer",
    },
];

{
    // ! ejercicio 1
    //
    // ? retornar un arreglo con todos los nombre de los usuarios
    //
    // Todo: Entrada => users
    // todo: Salida => [ 'Erik', 'Georg', 'Andrea', 'Oscar', 'Daniela' ]
    //
    function onlyNames(arr) {
        return;
    }
}

{
    // ! ejercicio 2
    //
    // ? retornar la suma de las edades de todos los usuarios
    //
    // todo: Entrada => users
    // todo: Salida => 157
    //
    function sumOfAgesFromUsers(arr) {
        return;
    }
}

{
    // ! ejercicio 3
    //
    // ? retornar un arreglo de objetos con el nombre y el correo de todos los usuarios
    //
    // todo: Entrada => users
    // todo: Salida =>
    /*
        [
            { nombre: 'Erik', correo: 'erik@academlo.com' },
            { nombre: 'Georg', correo: 'georg@academlo.com' },
            { nombre: 'Andrea',correo: 'andrea@hotmail.com' },
            { nombre: 'Oscar', correo: 'oscar@academlo.com' },
            { nombre: 'Daniela', correo: 'andrea@uaq.mx' }
        ] 
    */
    //
    function formatUsers(arr) {
        return;
    }
}

{
    // ! ejercicio 4
    //
    // ? retornar un arreglo de objetos con el nombre y el correo de todas las mujeres
    // ? siempre y cuando sean mujeres
    //
    // todo: Entrada => users
    // todo: Salida =>
    /* 
        [
            { nombre: 'Andrea',correo: 'andrea@hotmail.com' }
            { nombre: 'Daniela', correo: 'andrea@uaq.mx' }
        ]
    */
    //
    function formatUsersOnlyWomen(arr) {
        return;
    }
}

{
    // ! ejercicio 5
    //
    // ? retornar un arreglo de objetos con el nombre y la url de facebook de cada usuario
    //
    // todo: Entrada => users
    // todo: Salida =>
    /*
        [
            { nombre: 'Erik', urlFacebook: 'facebook/erik' },
            { nombre: 'Andrea', urlFacebook: 'facebook/andrea' },
            { nombre: 'Oscar', urlFacebook: 'facebook/oscar' }
        ]
    */
    function urlsFacebook(arr) {
        return;
    }
}

module.exports = {
    onlyNames,
    sumOfAgesFromUsers,
    formatUsers,
    formatUsersOnlyWomen,
    urlsFacebook,
};
