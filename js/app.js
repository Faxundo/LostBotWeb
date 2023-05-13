const json = `[
        {
            "nombre": "arabe",
            "valor": 1,
            "lista": [
                "Abdel",
                "Amin"
            ]
        },
        {
            "nombre": "heleno",
            "valor": 2,
            "lista": [
                "Teseo",
                "Platón"
            ]
        },
        {
            "nombre": "inca",
            "valor": 3,
            "lista": [
                "Pachacútec",
                "Atahualpa"
            ]
        },
        {
            "nombre": "chino",
            "valor": 4,
            "lista": [
                "Huan",
                "Jia"
            ]
        },
        {
            "nombre": "escandinavo",
            "valor": 5,
            "lista": [
                "Kratos",
                "Zeus"
            ]
        },
        {
            "nombre": "kanuri",
            "valor": 6,
            "lista": [
                "Ali",
                "Hassan"
            ]
        },
        {
            "nombre": "egipcio",
            "valor": 7,
            "lista": [
                "Hathor",
                "Amonet"
            ]
        },
        {
            "nombre": "mongol",
            "valor": 8,
            "lista": [
                "Altantsetseg",
                "Narantuyaa"
            ]
        },
        {
            "nombre": "esquimal",
            "valor": 9,
            "lista": [
                "Amaqjuaq",
                "Apaata"
            ]
        },
        {
            "nombre": "azteca",
            "valor": 10,
            "lista": [
                "Amoxtli",
                "Atl"
            ]
        },
        {
            "nombre": "galo",
            "valor": 11,
            "lista": [
                "Gael",
                "Brian"
            ]
        },
        {
            "nombre": "champa",
            "valor": 12,
            "lista": [
                "Ranjit",
                "Anand"
            ]
        },
        {
            "nombre": "hispano",
            "valor": 13,
            "lista": [
                "Pedro",
                "Pablo"
            ]
        },
        {
            "nombre": "romano",
            "valor": 14,
            "lista": [
                "Julio",
                "Julianos"
            ]
        },
        {
            "nombre": "japones",
            "valor": 15,
            "lista": [
                "Kuro",
                "Kuroneko"
            ]
        },
        {
            "nombre": "otomano",
            "valor": 16,
            "lista": [
                "Kadir",
                "Khan"
            ]
        },
        {
            "nombre": "maori",
            "valor": 17,
            "lista": [
                "Aroha",
                "Ari"
            ]
        },
        {
            "nombre": "eslavo",
            "valor": 18,
            "lista": [
                "Vera",
                "Zlata"
            ]
        }
    ]`;

var generador = document.getElementById("el_boton");
var contendorNombres = document.getElementById("nombres");
var naciones = document.getElementById("naciones");

generador.addEventListener('click', function () {
    var nacion = naciones.options[naciones.selectedIndex].value;

    var jsonJS = JSON.parse(json);
    var nacionElegida = jsonJS[nacion - 1].lista;

    var numero = numeroAleatorio(0, nacionElegida.length - 1);

    contendorNombres.textContent = nacionElegida[numero];
});

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

